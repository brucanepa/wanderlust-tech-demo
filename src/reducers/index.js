import { combineReducers } from 'redux';
import places, * as fromPlaces from './places';
import destinations, * as fromDestinations from './destinations';
import placeDetail from './placeDetail';
import continents, * as fromContinents from './continents';
import requesting, * as fromRequesting from './requesting';

const wanderApp = combineReducers({
  places,
  destinations,
  placeDetail,
  continents,
  requesting
});

export default wanderApp;

export const getVisiblePlaces = (state) =>
  fromPlaces.getVisiblePlaces(state.places);

 export const getPlace = (state, placeId) =>
  fromPlaces.getPlace(state.places, placeId) || {};

export const getDestinations = (state) =>
  fromDestinations.getDestinations(state.destinations);

export const getSelectedDestinationId = (state) =>
  fromDestinations.getSelectedDestinationId(state.destinations);

export const getPlaceDetail = (state) =>
	state.placeDetail;

export const getContinents = (state) =>
  fromContinents.getContinents(state.continents);

export const getSelectedDestinationInfo = (state) =>
  fromDestinations.getSelectedInfo(state.destinations);

export const getPlacesRegionName = (state) =>
  fromPlaces.getPlacesRegionName(state.places);

export const getRegionImageById = (state, regionId) =>
  fromContinents.getRegionImageById(state.continents, regionId);
  
export const showLoading = (state) =>
  fromRequesting.showLoading(state.requesting);

export const showError = (state) =>
  fromRequesting.showError(state.requesting);