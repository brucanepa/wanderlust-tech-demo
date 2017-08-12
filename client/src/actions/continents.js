import api from '../api';
import { normalize } from 'normalizr';
import * as schema from './schema';
import { continents as requests } from './requests';
import errorHandler from './errorHandler';

export const fetchContinents = () => (dispatch) => {
  dispatch(requests.requestContinents());
  return api.fetchContinents()
    .then((continents) => {
      dispatch(requests.receiveContinentsSuccess(normalize(continents, schema.arrayOfContinents)))
    }, () => {
      errorHandler(dispatch, requests.requestContinents().type)
    });
}