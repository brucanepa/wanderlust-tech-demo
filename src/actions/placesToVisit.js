import { generateId } from '../utils/helpers';
import * as api from '../api';
import { normalize } from 'normalizr';
import * as schema from './schema';

const requestPlaces = () => {
  return {
    type: 'REQUEST_PLACES_TO_VISIT'
  }
}

const receivePlaces = (filter, response) => {
  return {
    type: 'RECEIVE_PLACES_TO_VISIT',
    filter,
    response
  }
}

export const fetchPlaces = (filter) => (dispatch) => {
  dispatch(requestPlaces())
  return api.fetchPlacesToVisit(filter)
    .then(places => {
      dispatch(receivePlaces(filter, normalize(places, schema.arrayOfPlacesToVisit)));
    });
}

export const add = (placeId) => (dispatch) => api.addPlaceToVisit(placeId)
  .then(response => {
    dispatch({
      type: 'ADD_PLACE_TO_VISIT_SUCCESS',
      response: normalize(response, schema.placeToVisit),
    });
  });

export const positionChangeUp = (index) => (dispatch) => api.positionChangeUp(index)
  .then(response => {
    dispatch({
      type: 'POSITION_CHANGE_UP_PLACE_TO_VISIT_SUCCESS',
      response: normalize(response, schema.placeToVisit),
    });
  });

export const positionChangeDown = (index) => (dispatch) => api.positionChangeUp(index)
  .then(response => {
    dispatch({
      type: 'POSITION_CHANGE_DOWN_PLACE_TO_VISIT_SUCCESS',
      response: normalize(response, schema.placeToVisit),
    });
  });
