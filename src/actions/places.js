import { generateId } from '../utils/helpers';
import * as api from '../api';
import { normalize } from 'normalizr';
import * as schema from './schema';

const requestPlaces = () => {
  return {
    type: 'REQUEST_PLACES'
  }
}

const receivePlaces = (filter, response) => {
  return {
    type: 'RECEIVE_PLACES',
    filter,
    response
  }
}

export const fetchPlaces = (filter) => (dispatch) => {
  dispatch(requestPlaces());
  return api.fetchPlaces(filter)
    .then(places => {
      dispatch(receivePlaces(filter, normalize(places, schema.arrayOfPlaces)));
    });
}
