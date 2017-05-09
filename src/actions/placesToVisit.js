import api from '../api';
import { normalize } from 'normalizr';
import * as schema from './schema';
import { placesToVisit as requests } from './requests';

export const fetchPlaces = (filter) => (dispatch) => {
  dispatch(requests.requestPlaces());
  return api.fetchPlacesToVisit(filter)
    .then(places => {
      dispatch(requests.receivePlacesSuccess(filter, normalize(places, schema.arrayOfPlacesToVisit)));
    });
}

export const add = (placeId) => (dispatch) => {
  dispatch(requests.requestAdd());
  return api.addPlaceToVisit(placeId)
    .then(response => {
      dispatch(requests.receiveAddSuccess(normalize(response, schema.placeToVisit)));
    });
}

export const swapPositionUp = ({selectedId}) => (dispatch) => {
  dispatch(requests.requestSwapPositionUp());
  return api.swapPositionUpPlaceToVisit(selectedId)
    .then(() => {
      dispatch(requests.receiveSwapPositionUpSuccess(selectedId));
    })
}

export const swapPositionDown = ({selectedId}) => (dispatch) => {
  dispatch(requests.requestSwapPositionUp());
  return api.swapPositionUpPlaceToVisit(selectedId)
    .then(() => {
      dispatch(requests.receiveSwapPositionDownSuccess(selectedId));
    })
}

export const setSelected = (id) => (dispatch) => {
  dispatch({
    type: 'SELECTED_PLACE_TO_VISIT',
    selectedId: id
  });
};

export const remove = ({selectedId}) => (dispatch) => {
  dispatch(requests.requestRemovePlace());
  api.removePlaceToVisit(selectedId)
    .then(() => {
      dispatch(requests.receiveRemovePlaceSuccess(selectedId));
    });
}
