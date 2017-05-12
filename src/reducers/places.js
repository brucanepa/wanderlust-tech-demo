import { combineReducers } from 'redux';

const placesHashById = (state = {}, action) => {
  if (action.placesResponse) {
    return {
      //ToDo...state, Rompe al volver atras
      ...action.placesResponse.entities.places
    };
  }
  return state;
};

const placesIdByName = (state = [], action) => {
  if (action.placesResponse) {
    var places = action.placesResponse.entities.places;

    var newState = [/*...state, Rompe al volver atras*/ ...action.placesResponse.result];
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

export const getPlace = (state, placeId) => {
  //ToDo:Refactor
  const allPlaces = state.placesIdByName.map((id) => (state.placesHashById[id]));
  return allPlaces.filter((place) => place.id == placeId)[0];
};
