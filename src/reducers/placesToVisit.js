import { combineReducers } from 'redux';
import { getVisiblePlacesHash } from './places';
import { swapArrayPosition } from '../utils/helpers';

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

const createFilteredList = (filter) => {
  return (state = [], action) => {
    switch (action.type) {
      case 'RECEIVE_PLACES_TO_VISIT':
        return action.response.result;
      case 'ADD_PLACE_TO_VISIT_SUCCESS':
        return [...state, action.response.result];
      case 'SWAP_POSITION_UP_PLACE_TO_VISIT':
        const indexUp = state.indexOf(action.selectedId);
        return swapArrayPosition(state, indexUp, indexUp-1);
      case 'SWAP_POSITION_DOWN_PLACE_TO_VISIT':
        const indexDown = state.indexOf(action.selectedId);
        return swapArrayPosition(state, indexDown, indexDown+1);
      default:
        return state;
    }
  }
};

const idsByFilter = combineReducers({
  all: createFilteredList('all'),
});

const selectedId = (state = {}, action) => {
  if (action.selectedId) {
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