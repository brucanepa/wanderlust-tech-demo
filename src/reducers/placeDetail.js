import { combineReducers } from 'redux';
import { actionsTypes as actions } from '../constants';

const placeInformation = (state = { activities: [], description: '' }, action) => {
  if (action.placeDetailResponse) {
    const result = action.placeDetailResponse.result
    return {
      ...action.placeDetailResponse.entities.placeDetail[result]
    }
  }
  return state;
};

const reviewList = (state = [], action) => {
  switch (action.type) {
    case actions.receivePlaceDetailSuccess:
      const result = action.placeDetailResponse.result
      const reviews = action.placeDetailResponse.entities.placeDetail[result].reviews;
      return [...reviews];
    case actions.receiveAddReviewSuccess:
      const reviewId = action.reviewResponse.result;
      return [...state, action.reviewResponse.entities.review[reviewId]];
    default:
      return state;
  }
};

const placeRating = (state = { sumOfRatings: 0, ratingsCount: 0, rating: 0 }, action) => {
  let sumOfRatings = 0;
  let ratingsCount = 0;
  switch (action.type) {
    case actions.receivePlaceDetailSuccess:
      const result = action.placeDetailResponse.result
      const reviews = action.placeDetailResponse.entities.placeDetail[result].reviews;
      sumOfRatings = state.sumOfRatings + reviews.map((review) => review.rating).reduce((a, b) => a + b, 0);
      ratingsCount = state.ratingsCount + reviews.length;
      rating = ratingsCount > 0 ? (sumOfRatings / ratingsCount) : 0;
      return { sumOfRatings, ratingsCount, rating };
    case actions.receiveAddReviewSuccess:
      const reviewId = action.reviewResponse.result;
      const rating = action.reviewResponse.entities.review[reviewId].rating;
      sumOfRatings = state.sumOfRatings + rating;
      ratingsCount = state.ratingsCount + 1;
      rating = ratingsCount > 0 ? (sumOfRatings / ratingsCount) : 0;
      return { sumOfRatings, ratingsCount, rating };
    default:
      return state;
  }
};

const placeDetail = combineReducers({
  placeInformation,
  reviewList,
  placeRating
});

export default placeDetail;
