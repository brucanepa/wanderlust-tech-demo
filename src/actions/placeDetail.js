import api, { fakeApi } from '../api';
import { normalize } from 'normalizr';
import * as schema from './schema';
import { placeDetail as requests } from './requests';

export const fetchPlaceDetail = (placeId) => (dispatch) => {
  dispatch(requests.requestPlaceDetail());
  return api.fetchPlaceDetail(placeId)
    .then(response => {
      dispatch(requests.receivePlaceDetailSuccess(normalize(response, schema.placeDetail)));
    });
}

export const addReview = (review) => (dispatch) => {
  dispatch(requests.requestAddReview());
  return api.addReview(review)
    .then(() => {
      dispatch(requests.receiveAddReviewSuccess(normalize(review, schema.review)));
    });
}