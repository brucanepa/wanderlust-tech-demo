import api from '../api';
import { normalize } from 'normalizr';
import * as schema from './schema';
import { destinations as requests } from './requests';
import { getUserId } from '../constants';

export const fetchDestinations = () => (dispatch) => {
  dispatch(requests.requestDestinations());
  return api.fetchDestinations(getUserId())
    .then(response => {
      dispatch(requests.receiveDestinationsSuccess(normalize(response, schema.arrayOfDestinations)));
    });
}

export const add = (placeId) => (dispatch) => {
  dispatch(requests.requestAdd());
  return api.addDestination(getUserId(), placeId)
    .then(response => {
      dispatch(requests.receiveAddSuccess(normalize(response, schema.destination)));
    });
}

export const swapPositionUp = ({selectedId}) => (dispatch) => {
  dispatch(requests.requestSwapPositionUp());
  return api.swapPositionUpDestination(getUserId(), selectedId)
    .then(dispatch(requests.receiveSwapPositionUpSuccess(selectedId)))
}

export const swapPositionDown = ({selectedId}) => (dispatch) => {
  dispatch(requests.requestSwapPositionUp());
  return api.swapPositionDownDestination(getUserId(), selectedId)
    .then(dispatch(requests.receiveSwapPositionDownSuccess(selectedId)))
}

export const setSelected = (id) => (dispatch) => {
  dispatch({
    type: 'SELECTED_DESTINATION',
    selectedId: id
  });
};

export const remove = ({selectedId}) => (dispatch) => {
  dispatch(requests.requestRemoveDestination());
  api.removeDestination(getUserId(), selectedId)
    .then(dispatch(requests.receiveRemoveDestinationSuccess(selectedId)));
}
