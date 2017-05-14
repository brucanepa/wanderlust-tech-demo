import api, { fakeApi } from '../api';
import { normalize } from 'normalizr';
import * as schema from './schema';
import { placeDetail as requests } from './requests';
import { getUserId } from '../constants';

export const fetchPlaceDetail = (placeId) => (dispatch) => {
  dispatch(requests.requestPlaceDetail());
  return api.fetchPlaceDetail(placeId)
    .then(response => {
      dispatch(requests.receivePlaceDetailSuccess(normalize(response, schema.placeDetail)));
    });
}

export const addReview = (placeId, comment, rating) => (dispatch) => {
  dispatch(requests.requestAddReview());
  return api.addReview(getUserId(), placeId, comment, rating)
    .then(response => {
      dispatch(requests.receiveAddReviewSuccess(normalize(response, schema.review)));
    });
}