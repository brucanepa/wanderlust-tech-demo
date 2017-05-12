import { combineReducers } from 'redux';
import places, * as fromPlaces from './places';
import destinations, * as fromDestinations from './destinations';
import placeDetail, * as fromDetails from './placeDetail';

const wanderApp = combineReducers({
  places,
  destinations,
  placeDetail
});

export default wanderApp;

export const getVisiblePlaces = (state, filter) =>
  fromPlaces.getVisiblePlaces(state.places, filter);

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

