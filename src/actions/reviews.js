import api from '../api';
import { normalize } from 'normalizr';
import * as schema from './schema';
import { reviews as requests } from './requests';

export const fetchReviews = (filter) => (dispatch) => {
  dispatch(requests.requestPlaces());
  return api.fetchReviews(filter)
    .then(places => {
      dispatch(requests.receiveReviewsSuccess(filter, normalize(places, schema.arrayOfPlaces)));
    });
}

