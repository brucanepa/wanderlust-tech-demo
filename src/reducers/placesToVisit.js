import { combineReducers } from 'redux';
import { getVisiblePlacesHash } from './places';

const placesToVisitHashById = (state = {}, action) => {
  if (action.response) {
    const placesToVisit = action.response.entities.placesToVisit;
    return {
      ...state,
      ...placesToVisit
    };
  }
  return state;
};

const createList = (filter) => {
  return (state = [], action) => {
    switch (action.type) {
      case 'RECEIVE_PLACES_TO_VISIT':
        return action.response.result;
      case 'ADD_PLACES_TO_VISIT_SUCCESS':
        return [...state, action.response.result];
      case 'CHANGE_POSITION_UP_PLACES_TO_VISIT_SUCCESS':
        return state;
      case 'CHANGE_POSITION_DOWN_PLACES_TO_VISIT_SUCCESS':
        return state;
      default:
        return state;
    }
  }
};

const placesToVisit = combineReducers({
  placesToVisitHashById
});

export default placesToVisit;

export const getVisiblePlacesToVisit = (state, filter) => {
  return Object.values(state.placesToVisitHashById);
};
