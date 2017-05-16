import * as firebase from 'firebase';
import { uris, getUserId } from '../constants';

const config = {
  apiKey: 'AIzaSyBHlOtH4VOI-9WB1YgZEC1ZW5xO4dIKriQ',
  authDomain: 'wander-lust-visca-canepa.firebaseapp.com',
  databaseURL: 'https://wander-lust-visca-canepa.firebaseio.com/',
  storageBucket: 'gs://wander-lust-visca-canepa.appspot.com'
};

firebase.initializeApp(config);
const database = firebase.database();

let userKey = '';
let nextDestinationPosition = 0;

(() => {
  database.ref(uris.users)
    .orderByChild('id')
    .equalTo(getUserId())
    .once('value')
    .then((snapshot) => {
      userKey = Object.keys(snapshot.val())[0];
    });
})();

const getActualUserUri = () => (uris.users + '/' + userKey);

const getPlaceDetailUri = (placeId) => (uris.placesDetails + '/' + (placeId - 1));

// Begin Continents
export const fetchContinents = (dispatch) => {
  return database.ref(uris.continents)
    .once('value')
    .then((snapshot) => {
      return snapshot.val();
    }, () => ([]));
};
// End Continents

// Begin Places
export const fetchPlaces = (regionId) => {
  return database.ref(uris.places)
    .orderByChild('regionId')
    .equalTo(parseInt(regionId))
    .once('value')
    .then((snapshot) => {
      return snapshot.val() || [];
    })
};
// End Places

// // Begin Destinations
const updateNextDestinationPosition = (number) => {
  if (number >= nextDestinationPosition) {
    nextDestinationPosition = number + 1;
  }
};

export const fetchDestinations = () => {
  return database.ref(getActualUserUri())
    .once('value')
    .then((snapshot) => {
      const response = snapshot.val();
      const destinations = response && response[0] && response[0].destinations;
      return destinations ?
        Object.keys(destinations)
          .map((key) => {
            const destination = destinations[key];
            destination.id = key;
            updateNextDestinationPosition(destination.order);
            return destination;
          })
          .sort((a, b) => (a.order > b.order))
        : [];
    });
};

export const addDestination = (destination) => {
  destination.order = ++nextDestinationPosition;
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

 export const swapPositionDownDestination  = (selected, selectedDown) => {
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
  review.userId = getUserId();
  review.placeId = parseInt(review.placeId);
  const reviewRef = database.ref(getPlaceDetailUri(review.placeId))
    .child('reviews')
    .push(review);
  return reviewRef.then(() => {
    review.id = reviewRef.key;
  });
};
// End Places Details

