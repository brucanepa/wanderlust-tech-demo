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

export const swapPositionUp = ({selectedId}) => (dispatch) => api.swapPositionUpPlaceToVisit(selectedId)
  .then(response => {
    dispatch({
      type: 'SWAP_POSITION_UP_PLACE_TO_VISIT',
      selectedId
    });
  });

export const swapPositionDown = ({selectedId}) => (dispatch) => api.swapPositionDownPlaceToVisit(selectedId)
  .then(response => {
    dispatch({
      type: 'SWAP_POSITION_DOWN_PLACE_TO_VISIT',
      selectedId
    });
  });

export const setSelected = (id) => (dispatch) => {
  dispatch({
    type: 'SELECTED_PLACE_TO_VISIT',
    selectedId: id,
  });
};
