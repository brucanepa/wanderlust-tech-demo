import { combineReducers } from 'redux';
import places, * as fromPlaces from './places';
import destinations, * as fromDestinations from './destinations';
import placeDetail, * as fromDetails from './placeDetail';
import continents, * as fromContinents from './continents';

const wanderApp = combineReducers({
  places,
  destinations,
  placeDetail,
  continents
});

export default wanderApp;

export const getVisiblePlaces = (state) =>
  fromPlaces.getVisiblePlaces(state.places);

 export const getPlace = (state, placeId) =>
  fromPlaces.getPlace(state.places, placeId);

export const getDestinations = (state) =>
  fromDestinations.getDestinations(state.destinations);

export const getSelectedIdDestination = (state) =>
  fromDestinations.getSelectedIdDestination(state.destinations);

export const getPlaceDetail = (state) =>
	state.placeDetail;

export const getPlaceReviews = (state) =>
	state.placeDetail.reviewList;

export const getContinents = (state) =>
  fromContinents.getContinents(state.continents);