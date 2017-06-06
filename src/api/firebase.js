import * as firebase from 'firebase';
import { apiUris } from '../constants';

const config = {
  apiKey: 'AIzaSyBHlOtH4VOI-9WB1YgZEC1ZW5xO4dIKriQ',
  authDomain: 'wander-lust-visca-canepa.firebaseapp.com',
  databaseURL: 'https://wander-lust-visca-canepa.firebaseio.com/',
  storageBucket: 'gs://wander-lust-visca-canepa.appspot.com'
};

firebase.initializeApp(config);
const database = firebase.database();

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
      email: apiUser.email,
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

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     // User is signed in.
//   } else {
//     // User is signed out.
//   }
// });

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

export const signIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((response) => {
      return getUserFromApi(response.email)
        .then((user) => {
          return {
            ...setSession({
              ...response,
              ...user
            })
          }
        });
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

export const fetchDestinations = () => {
  return new Promise((resolve, reject) => {
    resolve(Object.keys(userDestinations)
      .map((key) => {
        const destination = userDestinations[key];
        destination.id = key;
        updateNextDestinationPosition(destination.order);
        return destination;
      })
      .sort((a, b) => (a.order > b.order)));
  });
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
        placeDetail.reviews = Object.keys(placeDetail.reviews).map((key) => {
          placeDetail.reviews[key].id = key;
          return placeDetail.reviews[key];
        })
        : [];
      return placeDetail;
    })
};

export const addReview = (review) => {
  review.userId = user.id;
  review.placeId = parseInt(review.placeId);
  const reviewRef = database.ref(getPlaceDetailUri(review.placeId))
    .child('reviews')
    .push(review);
  return reviewRef.then(() => {
    review.id = reviewRef.key;
  });
};
// End Places Details

