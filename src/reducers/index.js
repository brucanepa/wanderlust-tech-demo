import { combineReducers } from 'redux';
import places, * as fromPlaces from './places';
import destinations, * as fromDestinations from './destinations';
import reviews, * as fromReviews from './reviews';

const wanderApp = combineReducers({
  places,
  destinations,
  reviews
});

export default wanderApp;

export const getVisiblePlaces = (state, filter) =>
  fromPlaces.getVisiblePlaces(state.places, filter);

export const getVisibleDestinations = (state) =>
  fromDestinations.getVisibleDestinations(state.destinations);

export const getSelectedIdDestination = (state) =>
  fromDestinations.getSelectedIdDestination(state.destinations);

export const getVisibleReviews = (state, filter) =>
  fromReviews.getVisibleReviews(state, filter);