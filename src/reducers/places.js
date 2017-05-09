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

const places = combineReducers({
  placesHashById
});

export default places;

export const getVisiblePlaces = (state, filter) => {
  return Object.values(state.placesHashById);
};

export const getVisiblePlacesHash = (state) => {
  return state.placesHashById;
};