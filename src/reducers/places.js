import { combineReducers } from 'redux';

const placesHashById = (state = {}, action) => {
  if (action.placesResponse) {
    return {
      ...state,
      ...action.placesResponse.entities.places
    };
  }
  return state;
};

const placesIdByName = (state = [], action) => {
  if (action.placesResponse) {
    var places = action.placesResponse.entities.places;
    var newState = [...state, ...action.placesResponse.result];
    return newState.sort((a, b) => (places[a].name > places[b].name));
  }
  return state;
};

const places = combineReducers({
  placesHashById,
  placesIdByName
});

export default places;

export const getVisiblePlaces = (state, filter) => {
  return state.placesIdByName.map((placeId) => (state.placesHashById[placeId]));
};

export const getVisiblePlacesHash = (state) => {
  return state.placesHashById;
};