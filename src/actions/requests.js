
export const placesToVisit = {
  requestPlaces: () => {
    return {
      type: 'REQUEST_PLACES_TO_VISIT'
    }
  },
  receivePlacesSuccess: (filter, response) => {
    return {
      type: 'RECEIVE_PLACES_TO_VISIT_SUCCESS',
      filter,
      placesToVisitResponse: response
    }
  },
  requestAdd: () => {
    return {
      type: 'REQUEST_ADD_PLACE_TO_VISIT'
    }
  },
  receiveAddSuccess: (response) => {
    return {
      type: 'RECEIVE_ADD_PLACE_TO_VISIT_SUCCESS',
      placesToVisitResponse: response
    }
  },
  requestSwapPositionUp: () => {
    return {
      type: 'REQUEST_SWAP_POSITION_UP_PLACE_TO_VISIT'
    }
  },
  receiveSwapPositionUpSuccess: (selectedId) => {
    return {
      type: 'RECEIVE_SWAP_POSITION_UP_PLACE_TO_VISIT_SUCCESS',
      selectedId
    }
  },
  requestSwapPositionDown: () => {
    return {
      type: 'REQUEST_SWAP_POSITION_DOWN_PLACE_TO_VISIT'
    }
  },
  receiveSwapPositionDownSuccess: (selectedId) => {
    return {
      type: 'RECEIVE_SWAP_POSITION_DOWN_PLACE_TO_VISIT_SUCCESS',
      selectedId
    }
  },
  requestRemovePlace: () => {
    return {
      type: 'REQUEST_REMOVE_PLACE_TO_VISIT'
    }
  },
  receiveRemovePlaceSuccess: (selectedId) => {
    return {
      type: 'RECEIVE_REMOVE_PLACE_TO_VISIT_SUCCESS',
      selectedId
    }
  }
};

export const places = {
  requestPlaces: () => {
    return {
      type: 'REQUEST_PLACES'
    }
  },
  receivePlacesSuccess: (filter, response) => {
    return {
      type: 'RECEIVE_PLACES_SUCCESS',
      filter,
      placesResponse: response
    }
  }
};
