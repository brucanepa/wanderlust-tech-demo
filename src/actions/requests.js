import { actionsTypes as types } from '../constants';

export const places = {
  requestPlaces() {
    return {
      type: types.requestPlaces,
      requesting: true
    }
  },
  receivePlacesSuccess(regionId, response) {
    return {
      type: types.receivePlacesSuccess,
      placesResponse: response,
      regionId,
      receive: true
    }
  }
};

export const destinations = {
  requestDestinations() {
    return {
      type: types.requestDestinations,
      requesting: true
    }
  },
  receiveDestinationsSuccess(response) {
    return {
      type: types.receiveDestinationsSuccess,
      destinationResponse: response,
      receive: true
    }
  },
  requestAdd() {
    return {
      type: types.requestAdd,
      requesting: true
    }
  },
  receiveAddSuccess(response) {
    return {
      type: types.receiveAddSuccess,
      destinationResponse: response,
      receive: true
    }
  },
  requestSwapPositionUp() {
    return {
      type: types.requestSwapPositionUp
    }
  },
  receiveSwapPositionUpSuccess(selectedId, otherSelectedId) {
    return {
      type: types.receiveSwapPositionUpSuccess,
      selectedId,
      otherSelectedId
    }
  },
  requestSwapPositionDown() {
    return {
      type: types.requestSwapPositionDown
    }
  },
  receiveSwapPositionDownSuccess(selectedId, otherSelectedId) {
    return {
      type: types.receiveSwapPositionDownSuccess,
      selectedId,
      otherSelectedId
    }
  },
  requestRemoveDestination() {
    return {
      type: types.requestRemoveDestination,
      requesting: true
    }
  },
  receiveRemoveDestinationSuccess(selectedId) {
    return {
      type: types.receiveRemoveDestinationSuccess,
      selectedId,
      receive: true
    }
  }
};

export const placeDetail = {
  requestPlaceDetail() {
    return {
      type: types.requestPlaceDetail,
      requesting: true
    }
  },
  receivePlaceDetailSuccess(response) {
    return {
      type: types.receivePlaceDetailSuccess,
      placeDetailResponse: response,
      receive: true
    }
  },
  requestAddReview() {
    return {
      type: types.requestAddReview,
      requesting: true
    }
  },
  receiveAddReviewSuccess(response) {
    return {
      type: types.receiveAddReviewSuccess,
      reviewResponse: response,
      receive: true
    }
  }
};

export const continents = {
  requestContinents() {
    return {
      type: types.requestContinents,
      requesting: true
    }
  },
  receiveContinentsSuccess(response) {
    return {
      type: types.receiveContinentsSuccess,
      continentsResponse: response,
      receive: true
    }
  }
};

export const errors = {
  generic(actionType) {
    return {
      type: actionType,
      error: true
    }
  }
};