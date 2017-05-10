import api from '../api';
import { normalize } from 'normalizr';
import * as schema from './schema';
import { destinations as requests } from './requests';

export const fetchDestinations = (filter) => (dispatch) => {
  dispatch(requests.requestDestinations());
  return api.fetchDestinations(filter)
    .then(response => {
      dispatch(requests.receiveDestinationsSuccess(filter, normalize(response, schema.arrayOfDestinations)));
    });
}

export const add = (placeId) => (dispatch) => {
  dispatch(requests.requestAdd());
  return api.addDestination(placeId)
    .then(response => {
      dispatch(requests.receiveAddSuccess(normalize(response, schema.destination)));
    });
}

export const swapPositionUp = ({selectedId}) => (dispatch) => {
  dispatch(requests.requestSwapPositionUp());
  return api.swapPositionUpDestination(selectedId)
    .then(dispatch(requests.receiveSwapPositionUpSuccess(selectedId)))
}

export const swapPositionDown = ({selectedId}) => (dispatch) => {
  dispatch(requests.requestSwapPositionUp());
  return api.swapPositionDownDestination(selectedId)
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
  api.removeDestination(selectedId)
    .then(dispatch(requests.receiveRemoveDestinationSuccess(selectedId)));
}
