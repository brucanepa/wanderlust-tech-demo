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

const getRoundNumber = (number) => {
  return Math.round( number * 10 ) / 10;
};

const placeRating = (state = { sumOfRatings: 0, ratingsCount: 0, rating: 0 }, action) => {
  let sum = 0;
  let count = 0;
  switch (action.type) {
    case actions.receivePlaceDetailSuccess:
      const result = action.placeDetailResponse.result
      const reviews = action.placeDetailResponse.entities.placeDetail[result].reviews;
      sum = reviews.map((review) => review.rating).reduce((a, b) => a + b, 0);
      count = reviews.length;
      const newRating = count > 0 ? (sum / count) : 0;
      return { sumOfRatings: sum, ratingsCount: count, rating: getRoundNumber(newRating) };
    case actions.receiveAddReviewSuccess:
      const reviewId = action.reviewResponse.result;
      const actualRating = action.reviewResponse.entities.review[reviewId].rating;
      sum = state.sumOfRatings + actualRating;
      count = state.ratingsCount + 1;
      const newTotal = count > 0 ? (sum / count) : 0;
      return { sumOfRatings: sum, ratingsCount: count, rating: getRoundNumber(newTotal) };
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
