import api from '../api';
import { normalize } from 'normalizr';
import * as schema from './schema';
import { destinations as requests } from './requests';
import errorHandler from './errorHandler';
import actions from '../constants/actionTypes';

export const fetchDestinations = () => (dispatch) => {
  dispatch(requests.requestDestinations());
  return api.fetchDestinations()
    .then(response => {
      dispatch(requests.receiveDestinationsSuccess(normalize(response, schema.arrayOfDestinations)));
    }, () => {
      errorHandler(dispatch, requests.requestDestinations().type);
    });
}

export const add = (destination) => (dispatch) => {
  dispatch(requests.requestAdd());
  return api.addDestination(destination)
    .then(() => {
      dispatch(requests.receiveAddSuccess(normalize(destination, schema.destination)))
    }, () => {
      errorHandler(dispatch, requests.requestAdd().type);
    });
}

const shouldSwapPositions = (selectedInfo) => {
  return selectedInfo && selectedInfo.id;
};

export const swapPositionUp = (selectedInfo, selectedUpInfo) => (dispatch) => {
  if (shouldSwapPositions(selectedInfo) && shouldSwapPositions(selectedUpInfo)) {
    dispatch(requests.requestSwapPositionUp());
    return api.swapPositionUpDestination(selectedInfo, selectedUpInfo)
      .then(() => {
        dispatch(requests.receiveSwapPositionUpSuccess(selectedInfo.id, selectedUpInfo.id))
      }, () => {
        errorHandler(dispatch, requests.requestSwapPositionUp().type);
      });
  }
}

export const swapPositionDown = (selectedInfo, selectedDownInfo) => (dispatch) => {
  if (shouldSwapPositions(selectedInfo) && shouldSwapPositions(selectedDownInfo)) {
    dispatch(requests.requestSwapPositionUp());
    return api.swapPositionDownDestination(selectedInfo, selectedDownInfo)
      .then(() => {
        dispatch(requests.receiveSwapPositionDownSuccess(selectedInfo.id, selectedDownInfo.id))
      }, () => {
        errorHandler(dispatch, requests.requestSwapPositionUp().type);
      });
  }
}

export const setSelected = (id, index) => (dispatch) => {
  dispatch({
    type: actions.selectedDestination,
    selectedId: id,
    index
  });
};

export const remove = ({id}) => (dispatch) => {
  if (id) {
    dispatch(requests.requestRemoveDestination());
    return api.removeDestination(id)
      .then(() => {
        dispatch(requests.receiveRemoveDestinationSuccess(id))
      }, () => {
        errorHandler(dispatch, requests.requestRemoveDestination().type);
      });
  }
}
