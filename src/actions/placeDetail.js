import { fakeApi } from '../api';
import { normalize } from 'normalizr';
import * as schema from './schema';
import { placeDetail as requests } from './requests';
import { getUserId } from '../constants'

export const fetchPlaceDetail = (placeId) => (dispatch) => {
  dispatch(requests.requestPlaceDetail());
  return fakeApi.fetchPlaceDetail(placeId)
    .then(place => {
      dispatch(requests.receivePlaceDetailSuccess(normalize(place, schema.placeDetail)));
    });
}

export const addReview = (placeId, comment, rating) => (dispatch) => {
  dispatch(requests.requestAddReview());
  return fakeApi.addReview(getUserId(), placeId, comment, rating)
    .then(response => {
      dispatch(requests.receiveAddReviewSuccess(normalize(response, schema.review)));
    });
}