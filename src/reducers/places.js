import { combineReducers } from 'redux';

const updatePlaces = (state, response) => {
  let shouldUpdate = false;

  response.result.some((placeId) => {
    shouldUpdate = !state[placeId];
    return shouldUpdate;
  });

  return shouldUpdate ? { //ToDo: Warning al hacer Back
    ...response.entities.places
  } : state;
};

const placesHashById = (state = {}, action) => {
  if (action.placesResponse) {
    return updatePlaces(state, action.placesResponse);
  // return {
  //   //ToDo...state, Rompe al volver atras
  //   ...action.placesResponse.entities.places
  // };
  }
  return state;
};

const placesIdByName = (state = [], action) => {
  if (action.placesResponse) {
    const places = action.placesResponse.entities.places;
    const newState = [...state, ...action.placesResponse.result];
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
  return state.placesHashById[placeId];
};
