import { combineReducers } from 'redux';
import { getVisiblePlacesHash } from './places';
import { swapArrayPosition, removeArrayElement } from '../utils/helpers';

const placesToVisitHashById = (state = {}, action) => {
  if (action.placesToVisitResponse) {
    const placesToVisit = action.placesToVisitResponse.entities.placesToVisit;
    return {
      ...state,
      ...placesToVisit
    };
  } else {
    switch (action.type) {
      case 'RECEIVE_REMOVE_PLACE_TO_VISIT_SUCCESS':
        var newState = { ...state };
        delete newState[action.selectedId];
        return newState;
      default:
        return state;
    }
  }
};

const createFilteredList = (filter) => {
  return (state = [], action) => {
    switch (action.type) {
      case 'RECEIVE_PLACES_TO_VISIT_SUCCESS':
        return action.placesToVisitResponse.result;
      case 'RECEIVE_ADD_PLACE_TO_VISIT_SUCCESS':
        return [...state, action.placesToVisitResponse.result];
      case 'RECEIVE_SWAP_POSITION_UP_PLACE_TO_VISIT_SUCCESS':
        const indexUp = state.indexOf(action.selectedId);
        return swapArrayPosition(state, indexUp, indexUp - 1);
      case 'RECEIVE_SWAP_POSITION_DOWN_PLACE_TO_VISIT_SUCCESS':
        const indexDown = state.indexOf(action.selectedId);
        return swapArrayPosition(state, indexDown, indexDown + 1);
      case 'RECEIVE_REMOVE_PLACE_TO_VISIT_SUCCESS':
        return removeArrayElement(state, state.indexOf(action.selectedId));
      default:
        return state;
    }
  }
};

const idsByFilter = combineReducers({
  all: createFilteredList('all')
});

const selectedId = (state = {}, action) => {
  if (action.selectedId && state.selectedId != action.selectedId) {
    return {
      selectedId: action.selectedId
    }
  }
  return state;
};

const placesToVisit = combineReducers({
  placesToVisitHashById,
  idsByFilter,
  selectedId
});

export default placesToVisit;

export const getVisiblePlacesToVisit = (state, filter) => {
  const ids = state.idsByFilter['all'];
  return ids.map(id => state.placesToVisitHashById[id]);
};

export const getSelectedIdPlaceToVisit = (state) => {
  return state.selectedId;
};
