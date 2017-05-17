import { combineReducers } from 'redux';
import { swapArrayPosition, removeArrayElement } from '../utils/arrayHelper';
import { actionsTypes as actions } from '../constants';

const swapOrders = (state, selectedId, otherSelectedId) => {
  const newState = {
    ...state
  };
  const selectedOrder = newState[selectedId].order;
  newState[selectedId].order = newState[otherSelectedId].order;
  newState[otherSelectedId].order = selectedOrder;
  return newState;
};

const destinationsHashById = (state = {}, action) => {
  if (action.destinationResponse) {
    return {
      ...state,
      ...action.destinationResponse.entities.destinations
    };
  } else if (action.otherSelectedId) {
    return swapOrders(state, action.selectedId, action.otherSelectedId);
  } else {
    switch (action.type) {
      case actions.receiveRemoveDestinationSuccess:
        const newState = {
          ...state
        };
        delete newState[action.selectedId];
        return newState;
      default:
        return state;
    }
  }
};

const destinationList = (state = [], action) => {
  switch (action.type) {
    case actions.receiveDestinationsSuccess:
      return action.destinationResponse.result;
    case actions.receiveAddSuccess:
      return [...state, action.destinationResponse.result];
    case actions.receiveSwapPositionUpSuccess:
      const indexUp = state.indexOf(action.selectedId);
      return swapArrayPosition(state, indexUp, indexUp - 1);
    case actions.receiveSwapPositionDownSuccess:
      const indexDown = state.indexOf(action.selectedId);
      return swapArrayPosition(state, indexDown, indexDown + 1);
    case actions.receiveRemoveDestinationSuccess:
      return removeArrayElement(state, state.indexOf(action.selectedId));
    default:
      return state;
  }
};

const getSelectedDestination = (selectedId, index) => {
  return {
    selectedId,
    index
  }
};

const selectedDestination = (state = {}, action) => {
  if ((action.selectedId && state.selectedId != action.selectedId) || action.otherSelectedId) {
    switch (action.type) {
      case actions.selectedDestination:
        return getSelectedDestination(action.selectedId, action.index);
      case actions.receiveSwapPositionUpSuccess:
        return getSelectedDestination(action.selectedId, state.index - 1);
      case actions.receiveSwapPositionDownSuccess:
        return getSelectedDestination(action.selectedId, state.index + 1);
      default:
        return getSelectedDestination(0, -1);
    }
  } else {
    switch (action.type) {
      case actions.receiveRemoveDestinationSuccess:
        return getSelectedDestination(0, -1);
    }
  }
  return state;
};

const destinations = combineReducers({
  destinationsHashById,
  destinationList,
  selectedDestination
});

export default destinations;

export const getDestinations = (state) => {
  const ids = state.destinationList;
  return ids.map(id => state.destinationsHashById[id]);
};

export const getSelectedDestinationId = (state) => {
  return state.selectedDestination.selectedId;
};

const getSelectedInfoByIndex = (state, index) => {
  if (index < 0 || !state.destinationList || index >= state.destinationList.length) return {};
  const destination = state.destinationsHashById[state.destinationList[index]];
  return destination ? {
    id: destination.id,
    order: destination.order,
    name: destination.name,
    index
  } : {};
};

export const getSelectedInfo = (state) => {
  return {
    selected: getSelectedInfoByIndex(state, state.selectedDestination.index),
    selectedUp: getSelectedInfoByIndex(state, state.selectedDestination.index - 1),
    selectedDown: getSelectedInfoByIndex(state, state.selectedDestination.index + 1)
  }
};