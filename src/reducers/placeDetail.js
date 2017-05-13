import { combineReducers } from 'redux';
import { swapArrayPosition, removeArrayElement } from '../utils/helpers';

const placeInformation = (state = { activities: [], description: ''}, action) => {
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
    case 'RECEIVE_PLACE_DETAIL_SUCCESS':
      const result = action.placeDetailResponse.result
      const reviews = action.placeDetailResponse.entities.placeDetail[result].reviews;
      const sumOfRates = reviews.map((review) => review.rate).reduce((a, b) => a + b, 0);
      return [...reviews];
    case 'RECEIVE_ADD_REVIEW_SUCCESS':
      const reviewId = action.reviewResponse.result;
      return [...state, action.reviewResponse.entities.review[reviewId]];
    default:
      return state;
  }
};

const placeRating = (state = { sumOfRates: 0, ratesCount: 0}, action) => {
  let sumOfRates = 0;
  let ratesCount = 0; 
  switch (action.type) {
    case 'RECEIVE_PLACE_DETAIL_SUCCESS':
      const result = action.placeDetailResponse.result
      const reviews = action.placeDetailResponse.entities.placeDetail[result].reviews;
      sumOfRates = state.sumOfRates + reviews.map((review) => review.rate).reduce((a, b) => a + b, 0);
      ratesCount = state.ratesCount + reviews.length;
      return {sumOfRates, ratesCount};
    case 'RECEIVE_ADD_REVIEW_SUCCESS':
      const reviewId = action.reviewResponse.result;
      const rate = action.reviewResponse.entities.review[reviewId].rate;
      sumOfRates = state.sumOfRates + rate;
      ratesCount = state.ratesCount + 1;
      return {sumOfRates, ratesCount};
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

