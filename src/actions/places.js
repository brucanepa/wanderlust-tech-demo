import api from '../api';
import { normalize } from 'normalizr';
import * as schema from './schema';
import { places as requests } from './requests';

export const fetchPlaces = (regionId) => (dispatch) => {
  dispatch(requests.requestPlaces());
  return api.fetchPlaces(regionId)
    .then(places => {
      dispatch(requests.receivePlacesSuccess(regionId, normalize(places, schema.arrayOfPlaces)));
    });
}

