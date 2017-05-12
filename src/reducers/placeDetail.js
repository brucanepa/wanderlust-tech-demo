import { combineReducers } from 'redux';
import { swapArrayPosition, removeArrayElement } from '../utils/helpers';

const placeInformation = (state = {}, action) => {
  if (action.placeDetailResponse) {
    const result = action.placeDetailResponse.result
    return action.placeDetailResponse.entities.placeDetail[result];
  }
  return state;
};

/*const reviewsHashById = (state = {}, action) => {
  if (action.placeDetailResponse) {
    const result = action.placeDetailResponse.result
    const reviews = action.placeDetailResponse.entities.placeDetail[result].reviews;
    return {
      ...reviews
    };
  }
  return state;
};

const reviewList = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_PLACE_DETAIL_SUCCESS':
      const result = action.placeDetailResponse.result
      const reviews = action.placeDetailResponse.entities.placeDetail[result].reviews.map((r) => r.id);
      return [...reviews];
    case 'RECEIVE_ADD_REVIEW_SUCCESS':
      return [...state, action.reviewResponse.result];
    default:
      return state;
  }
};*/

const reviewList = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_PLACE_DETAIL_SUCCESS':
      const result = action.placeDetailResponse.result
      const reviews = action.placeDetailResponse.entities.placeDetail[result].reviews;
      return [...reviews];
    case 'RECEIVE_ADD_REVIEW_SUCCESS':
      const reviewId = action.reviewResponse.result;
      return [...state, action.reviewResponse.entities.review[reviewId]];
    default:
      return state;
  }
};

const placeDetail = combineReducers({
  placeInformation,
  //reviewsHashById,
  reviewList
});

export default placeDetail;

export const getReviews = (state) => {
  const ids = state.reviewList;
  return ids.map(id => state.reviewsHashById[id]);
};


