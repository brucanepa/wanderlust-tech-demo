import api from '../api';
import { normalize } from 'normalizr';
import * as schema from './schema';
import { places as requests } from './requests';

export const fetchPlaces = (filter) => (dispatch) => {
  dispatch(requests.requestPlaces());
  return api.fetchPlaces(filter)
    .then(places => {
      dispatch(requests.receivePlacesSuccess(filter, normalize(places, schema.arrayOfPlaces)));
    });
}

