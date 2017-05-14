import api, { fakeApi } from '../api';
import { normalize } from 'normalizr';
import * as schema from './schema';
import { destinations as requests } from './requests';

export const fetchDestinations = () => (dispatch) => {
  dispatch(requests.requestDestinations());
  return api.fetchDestinations()
    .then(response => {
      dispatch(requests.receiveDestinationsSuccess(normalize(response, schema.arrayOfDestinations)));
    });
}

export const add = (destination) => (dispatch) => {
  dispatch(requests.requestAdd());
  return api.addDestination(destination)
    .then(() => {
      dispatch(requests.receiveAddSuccess(normalize(destination, schema.destination)));
    });
}

export const swapPositionUp = ({selectedId}) => (dispatch) => {
  dispatch(requests.requestSwapPositionUp());
  return fakeApi.swapPositionUpDestination(selectedId)
    .then(dispatch(requests.receiveSwapPositionUpSuccess(selectedId)))
}

export const swapPositionDown = ({selectedId}) => (dispatch) => {
  dispatch(requests.requestSwapPositionUp());
  return fakeApi.swapPositionDownDestination(selectedId)
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
  fakeApi.removeDestination(selectedId)
    .then(dispatch(requests.receiveRemoveDestinationSuccess(selectedId)));
}
