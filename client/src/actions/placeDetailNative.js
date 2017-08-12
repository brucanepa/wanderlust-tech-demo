import { addReviewNative as addReview } from '../api/firebaseNative';
import { normalize } from 'normalizr';
import * as schema from './schema';
import { placeDetail as requests } from './requests';
import errorHandler from './errorHandler';

export const addReviewNative = (review, image) => (dispatch) => {
  dispatch(requests.requestAddReview());
  return addReview(review, image)
    .then(() => {
      dispatch(requests.receiveAddReviewSuccess(normalize(review, schema.review)));
    }, () => {
      errorHandler(dispatch, requests.requestAddReview().type);
    });
}