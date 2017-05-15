
export const places = {
  requestPlaces: () => {
    return {
      type: 'REQUEST_PLACES'
    }
  },
  receivePlacesSuccess: (regionId, response) => {
    return {
      type: 'RECEIVE_PLACES_SUCCESS',
      placesResponse: response,
      regionId
    }
  }
};

export const destinations = {
  requestDestinations: () => {
    return {
      type: 'REQUEST_DESTINATIONS'
    }
  },
  receiveDestinationsSuccess: (response) => {
    return {
      type: 'RECEIVE_DESTINATIONS_SUCCESS',
      destinationResponse: response
    }
  },
  requestAdd: () => {
    return {
      type: 'REQUEST_ADD_DESTINATION'
    }
  },
  receiveAddSuccess: (response) => {
    return {
      type: 'RECEIVE_ADD_DESTINATION_SUCCESS',
      destinationResponse: response
    }
  },
  requestSwapPositionUp: () => {
    return {
      type: 'REQUEST_SWAP_POSITION_UP_DESTINATION'
    }
  },
  receiveSwapPositionUpSuccess: (selectedId, otherSelectedId) => {
    return {
      type: 'RECEIVE_SWAP_POSITION_UP_DESTINATION_SUCCESS',
      selectedId,
      otherSelectedId
    }
  },
  requestSwapPositionDown: () => {
    return {
      type: 'REQUEST_SWAP_POSITION_DOWN_DESTINATION'
    }
  },
  receiveSwapPositionDownSuccess: (selectedId, otherSelectedId) => {
    return {
      type: 'RECEIVE_SWAP_POSITION_DOWN_DESTINATION_SUCCESS',
      selectedId,
      otherSelectedId
    }
  },
  requestRemoveDestination: () => {
    return {
      type: 'REQUEST_REMOVE_DESTINATION'
    }
  },
  receiveRemoveDestinationSuccess: (selectedId) => {
    return {
      type: 'RECEIVE_REMOVE_DESTINATION_SUCCESS',
      selectedId
    }
  }
};

export const placeDetail = {
  requestPlaceDetail: () => {
    return {
      type: 'REQUEST_DETAIL'
    }
  },
  receivePlaceDetailSuccess: (response) => {
    return {
      type: 'RECEIVE_PLACE_DETAIL_SUCCESS',
      placeDetailResponse: response
    }
  },
  requestAddReview: () => {
    return {
      type: 'REQUEST_ADD_REVIEW'
    }
  },
  receiveAddReviewSuccess: (response) => {
    return {
      type: 'RECEIVE_ADD_REVIEW_SUCCESS',
      reviewResponse: response
    }
  }
};

export const continents = {
  requestContinents: () => {
    return {
      type: 'REQUEST_CONTINENTS'
    }
  },
  receiveContinentsSuccess: (response) => {
    return {
      type: 'RECEIVE_CONTINENTS_SUCCESS',
      continentsResponse: response,
    }
  }
};