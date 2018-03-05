import { loadState } from '../utils/localStorage';

const nodeApiUrl = 'http://localhost:3001';

const getHeaders = () => {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Auth-UserId': user.id.toString(),
    'X-Auth-Token': user.token.toString()
  }
};

const getHttp = (url) => {
  if (user.id && user.token && url.indexOf('users') != -1) {
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers(getHeaders())
    });
    return fetch(request).then(response => response.json());
  } else {
    return fetch(url).then(response => response.json());
  }
};

const postHttp = (url, data, method) => {
  return fetch(url, {
    method: method || 'POST',
    headers: getHeaders(),
    body: data && JSON.stringify(data)
  }).then(response => response.json());
};

const deleteHttp = (url, id) => {
  url = id ? `${url}/${id}` : url;
  return fetch(url, {
    method: 'DELETE',
    headers: getHeaders()
  }).then(response => response.json());
};

let signingIn = false;
let user;
let userDestinations;
const defaultUser = {
  token: '',
  id: '',
  key: '',
  email: '',
  name: '',
  nextDestinationPosition: 0
};

const getUrl = function() {
  let url = nodeApiUrl;
  if (arguments) {
    const length = arguments.length;
    for (let i = 0; i < length; i++) {
      url += `/${arguments[i]}`;
    }
  }
  return url;
};

const setSession = (apiUser) => {
  if (apiUser) {
    userDestinations = apiUser.destinations;
    user = {
      ...defaultUser,
      token: apiUser.token,
      id: apiUser.id,
      key: apiUser.key,
      email: apiUser.username,
      name: apiUser.name
    }
  } else {
    userDestinations = [];
    user = {
      ...defaultUser
    };
  }
  return user;
};
setSession();

const handleSignInError = () => {
  setSession();
  return {
    errorCode: 400,
    errorMessage: 'not logged'
  };
};

export const signIn = (username, password) => {
  return postHttp(getUrl('auth'), {
    username,
    password
  }).then(result => {
    if (result.result == 'success') {
      const session = setSession(result.data);
      return {
        ...session
      };
    } else {
      return handleSignInError();
    }
  }, (error) => {
    return handleSignInError();
  });
}

export const signOut = () => {
  return deleteHttp(getUrl('auth'))
    .then(() => {
      setSession();
    })
    .catch((error) => {
      setSession();
    });
};

export const fetchContinents = () => {
  return getHttp(getUrl('continents'))
    .then(continents => {
      if (continents) {
        continents.forEach((continent) => {
          continent.regions.sort((a, b) => {
            return a.name > b.name;
          });
        });
      }
      return continents || [];
    });
};

export const fetchPlaces = (regionId) => {
  return getHttp(getUrl('places', regionId))
    .then(places => {
      return places;
    });
};

export const fetchPlaceDetail = (placeId) => {
  return getHttp(getUrl('placesDetail', placeId))
    .then(placeDetail => {
      placeDetail.reviews = placeDetail.reviews ?
        Object
          .keys(placeDetail.reviews)
          .map((key, index) => {
            const review = placeDetail.reviews[key];
            review.id = key;
            return review;
          })
        : [];
      return placeDetail;
    });
};

export const addReview = (review) => {
  review.userId = parseInt(user.id);
  review.placeId = parseInt(review.placeId);
  return postHttp(getUrl('placesDetail', 'review'), review)
    .then(result => {
      if (result.result == 'success') {
        review.key = result.data;
      }
    });
};

const updateNextDestinationPosition = (order) => {
  if (order >= user.nextDestinationPosition) {
    user.nextDestinationPosition = order + 1;
  }
};

const mapDestinations = (destinations) => {
  return destinations
    .map((destination) => {
      updateNextDestinationPosition(destination.order);
      return destination;
    })
    .sort((a, b) => (a.order > b.order));
};

const anyUserDestinations = () => {
  return userDestinations && userDestinations.length;
};

export const fetchDestinations = () => {
  if (anyUserDestinations() || user.id) {
    return new Promise((resolve, reject) => {
      resolve(mapDestinations(userDestinations));
    });
  } else {
    const stateInStorage = loadState();
    const sessionInStorage = stateInStorage && stateInStorage.session;
    const userInStorage = sessionInStorage && sessionInStorage.user;
    user = {
      ...userInStorage
    }
    if (userInStorage && sessionInStorage.signedIn) {
      return getUserFromApi(userInStorage.email)
        .then((user) => {
          if (!user) {
            signOut();
            return [];
          }
          setSession({
            ...userInStorage,
            ...user
          });
          return mapDestinations(user.destinations);
        });
    } else {
      return new Promise((resolve, reject) => {
        reject();
      });
    }
  }
};

const getUserFromApi = () => {
  return getHttp(getUrl('users'))
    .then(result => {
      if (result.result == 'success') {
        result.data.destinations.forEach(destination => {
          destination.key = destination.order;
        })
        return result.data;
      }
    })
};

export const addDestination = (destination) => {
  destination.order = ++user.nextDestinationPosition;
  return postHttp(getUrl('users', 'destinations'), destination)
    .then(result => {
      if (result.result == 'success') {
        destination.key = destination.id = result.data;
      }
    });
};

export const swapPositionUpDestination = (selected, selectedUp) => {
  return postHttp(getUrl('users', 'destinations', selected.id), {
    otherId: selectedUp.id,
    order: selected.order,
    otherOrder: selectedUp.order
  }, 'PUT');
};

export const swapPositionDownDestination = (selected, selectedDown) => {
  return postHttp(getUrl('users', 'destinations', selected.id), {
    otherId: selectedDown.id,
    order: selected.order,
    otherOrder: selectedDown.order
  }, 'PUT');
};

export const removeDestination = (destinationId) => {
  return deleteHttp(getUrl('users', 'destinations'), destinationId)
    .then(result => {
      console.log(result);
    })
};
