import { combineReducers } from 'redux';

const reviewsHashById = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.reviews
    };
  }
  return state;
};

const reviews = combineReducers({
  reviewsHashById
});

export default reviews;

 export const getVisibleReviews = (state, filter) => {
   return state;
 };

export const getVisibleReviewsHash = (state) => {
  return state.reviewsHashById;
};
