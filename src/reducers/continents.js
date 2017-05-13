import { combineReducers } from 'redux';

const continentsHashById = (state = {}, action) => {
  if (action.continentsResponse) {
    return {
      ...action.continentsResponse.entities.continents
    };
  }
  return state;
};

const continentsIdByName = (state = [], action) => {
  if (action.continentsResponse) {
    const continents = action.continentsResponse.entities.continents;
    const newState = [...action.continentsResponse.result];
    return newState.sort((a, b) => (continents[a].name > continents[b].name));
  }
  return state;
};

const continents = combineReducers({
  continentsHashById,
  continentsIdByName
});

export default continents;

export const getContinents = (state) => {
  return state.continentsIdByName.map((continentId) => (state.continentsHashById[continentId]));
};