import { combineReducers } from 'redux';
import places, * as fromPlaces from './places';
import placesToVisit, * as fromPlacesToVisit from './placesToVisit';

const wanderApp = combineReducers({
  places,
  placesToVisit
});

export default wanderApp;

export const getVisiblePlaces = (state, filter) =>
  fromPlaces.getVisiblePlaces(state.places, filter);

export const getVisiblePlacesToVisit = (state) =>
  fromPlacesToVisit.getVisiblePlacesToVisit(state.placesToVisit);
