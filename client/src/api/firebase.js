import * as firebase from 'firebase';
import { apiUris } from '../constants';
import { loadState } from '../utils/localStorage';

const config = {
  apiKey: 'AIzaSyBHlOtH4VOI-9WB1YgZEC1ZW5xO4dIKriQ',
  authDomain: 'wander-lust-visca-canepa.firebaseapp.com',
  databaseURL: 'https://wander-lust-visca-canepa.firebaseio.com/',
  storageBucket: 'gs://wander-lust-visca-canepa.appspot.com'
};

firebase.initializeApp(config);
const database = firebase.database();

export const firebaseStorage = firebase.storage();

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

const setSession = (apiUser) => {
  if (apiUser) {
    userDestinations = apiUser.destinations;
    user = {
      ...defaultUser,
      token: apiUser.uid,
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

const getActualUserUri = () => (apiUris.users + '/' + user.key);

const getPlaceDetailUri = (placeId) => (apiUris.placesDetails + '/' + (placeId - 1));

// Begin Session
const getUserFromApi = (username) => {
  return database.ref(apiUris.users)
    .orderByChild('username')
    .equalTo(username)
    .once('value')
    .then((snapshot) => {
      const response = snapshot.val();
      let user;
      response && response.every((apiUser) => {
        if (apiUser && apiUser.username === username) {
          user = apiUser;
        }
        return user;
      });
      return user || {};
    });
};

const setSessionFromApi = (session) => {
  return getUserFromApi(session.email)
    .then((user) => {
      const session = setSession({
        ...session,
        ...user
      });
      return {
        ...session
      }
    });
};

export const signIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((response) => {
      return setSessionFromApi(response);
    }, (error) => {
      setSession();
      return {
        errorCode: error.code,
        errorMessage: error.message
      };
    });
}

export const signOut = () => {
  return firebase.auth().signOut()
    .then(() => {
      setSession();
    })
    .catch((error) => {
      setSession();
    });
};
// End Session

// Begin Continents
export const fetchContinents = () => {
  return database.ref(apiUris.continents)
    .once('value')
    .then((snapshot) => {
      const continents = snapshot.val();
      if (continents) {
        continents.forEach((continent) => {
          continent.regions.sort((a, b) => {
            return a.name > b.name;
          })
        });
      }
      return continents || [];
    });
};
// End Continents

// Begin Places
export const fetchPlaces = (regionId) => {
  return database.ref(apiUris.places)
    .orderByChild('regionId')
    .equalTo(parseInt(regionId))
    .once('value')
    .then((snapshot) => {
      return snapshot.val() || [];
    })
};
// End Places

// // Begin Destinations
const updateNextDestinationPosition = (order) => {
  if (order >= user.nextDestinationPosition) {
    user.nextDestinationPosition = order + 1;
  }
};

const mapDestinations = (destinations) => {
  return Object.keys(destinations)
    .map((key) => {
      const destination = destinations[key];
      destination.id = key;
      updateNextDestinationPosition(destination.order);
      return destination;
    })
    .sort((a, b) => (a.order > b.order));
};

const anyUserDestinations = () => {
  return userDestinations && Object.keys(userDestinations).length;
};

export const fetchDestinations = () => {
  if (anyUserDestinations()) {
    return new Promise((resolve, reject) => {
      resolve(mapDestinations(userDestinations));
    });
  } else {
    const stateInStorage = loadState();
    const sessionInStorage = stateInStorage && stateInStorage.session;
    const userInStorage = sessionInStorage && sessionInStorage.user;
    if (userInStorage && sessionInStorage.signedIn) {
      return getUserFromApi(userInStorage.email)
        .then((user) => {
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

export const addDestination = (destination) => {
  destination.order = ++user.nextDestinationPosition;
  const destinationsRef = database.ref(getActualUserUri())
    .child('destinations')
    .push(destination);
  const destinationKey = destinationsRef.key;
  return destinationsRef
    .then((snapshot) => {
      destination.id = destinationKey;
    });
};

const orderUri = '/order';

export const swapPositionUpDestination = (selected, selectedUp) => {
  const updatedObjects = {};
  updatedObjects[selected.id + orderUri] = selectedUp.order;
  updatedObjects[selectedUp.id + orderUri] = selected.order;
  return database.ref(getActualUserUri())
    .child('destinations')
    .update(updatedObjects);
};

export const swapPositionDownDestination = (selected, selectedDown) => {
  const updatedObjects = {};
  updatedObjects[selected.id + orderUri] = selectedDown.order;
  updatedObjects[selectedDown.id + orderUri] = selected.order;
  return database.ref(getActualUserUri())
    .child('destinations')
    .update(updatedObjects);
};

export const removeDestination = (destinationId) => {
  return database.ref(getActualUserUri())
    .child('destinations/' + destinationId)
    .remove();
};
// End Destinations

// // Begin Places Details

export const fetchPlaceDetail = (placeId) => {
  return database.ref(getPlaceDetailUri(placeId))
    .once('value')
    .then((snapshot) => {
      const placeDetail = snapshot.val();
      placeDetail.reviews = placeDetail.reviews ?
        placeDetail.reviews = Object.keys(placeDetail.reviews)
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
  review.userId = user.id;
  review.placeId = parseInt(review.placeId);
  const reviewRef = database.ref(getPlaceDetailUri(review.placeId))
    .child('reviews')
    .push(review);
  return reviewRef.then(() => {
    review.id = reviewRef.key;
    return review.id;
  });
};

export const addImageToReview = (review, imageUri) => {
  const reviewKey = review.id || review.key;
  const updatedObjects = {};
  review.image = imageUri;
  updatedObjects[`${reviewKey}/image`] = imageUri;
  return database.ref(getPlaceDetailUri(review.placeId))
    .child('reviews')
    .update(updatedObjects)
};
// End Places Details
