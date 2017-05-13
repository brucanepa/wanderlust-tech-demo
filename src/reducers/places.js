import { combineReducers } from 'redux';

const placesHashById = (state = {}, action) => {
  if (action.placesResponse) {
    return {
      ...action.placesResponse.entities.places
    };
  }
  return state;
};

const placesIdByName = (state = [], action) => {
  if (action.placesResponse) {
    const places = action.placesResponse.entities.places;
    const newState = [...action.placesResponse.result];
    return newState.sort((a, b) => (places[a].name > places[b].name));
  }
  return state;
};

const places = combineReducers({
  placesHashById,
  placesIdByName
});

export default places;

export const getVisiblePlaces = (state) => {
  return state.placesIdByName.map((placeId) => (state.placesHashById[placeId]));
};

export const getPlace = (state, placeId) => {
  return state.placesHashById[placeId];
};
