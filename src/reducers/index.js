import { combineReducers } from 'redux';
import places, * as fromPlaces from './places';
import placesToVisit, * as fromPlacesToVisit from './placesToVisit';
import placeReviews, * as fromPlaceReviews from './placeReviews';

const wanderApp = combineReducers({
  places,
  placesToVisit,
  placeReviews
});

export default wanderApp;

export const getVisiblePlaces = (state, filter) =>
  fromPlaces.getVisiblePlaces(state.places, filter);

export const getVisiblePlacesToVisit = (state) =>
  fromPlacesToVisit.getVisiblePlacesToVisit(state.placesToVisit);

export const getSelectedIdPlaceToVisit = (state) =>
  fromPlacesToVisit.getSelectedIdPlaceToVisit(state.placesToVisit);

export const getVisibleReviews = (state, filter) =>
  fromPlaceReviews.getVisibleReviews(state, filter);