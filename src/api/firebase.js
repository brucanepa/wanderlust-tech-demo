import * as firebase from 'firebase';
import { uris, getUserId } from '../constants';
import { normalize } from 'normalizr';
import * as schema from '../actions/schema';

const config = {
  apiKey: 'AIzaSyBHlOtH4VOI-9WB1YgZEC1ZW5xO4dIKriQ',
  authDomain: 'wander-lust-visca-canepa.firebaseapp.com',
  databaseURL: 'https://wander-lust-visca-canepa.firebaseio.com/',
  storageBucket: 'gs://wander-lust-visca-canepa.appspot.com'
};
firebase.initializeApp(config);
const database = firebase.database();
const value = 'value';

const continentsRef = database.ref(uris.continents);

let userKey = '';
let nextDestinationPosition = 0;

(() => {
  database.ref(uris.users)
    .orderByChild('id')
    .equalTo(getUserId())
    .once(value)
    .then((snapshot) => {
      userKey = Object.keys(snapshot.val())[0];
    });
})();

// Begin Continents
export const fetchContinents = (dispatch) => {
  const promise = new Promise((resolve, reject) => {
    continentsRef
      .on(value, (snapshot) => {
        resolve(snapshot.val());
      }, () => (reject([])));
  });
  return promise;
};
// End Continents

// Begin Places
export const fetchPlaces = (regionId) => {
  return database.ref(uris.places)
    .orderByChild('regionId')
    .equalTo(parseInt(regionId))
    .once(value)
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
  return database.ref(uris.users)
    .orderByChild('id')
    .equalTo(getUserId())
    .once(value)
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
  destination.order = nextDestinationPosition++;
  const destinationsRef = database.ref(uris.users + '/' + userKey).child('destinations').push(destination);
  const destinationKey = destinationsRef.key;
  return destinationsRef
    .then((snapshot) => {
      destination.id = destinationKey;
    });
};

// export const swapPositionUpDestination = (userId, selectedId) => delay(500).then(() => {
//   const user = getUser(userId);
//   const index = findIndexOfDestination(user.destinations, selectedId);
//   user.destinations = swapArrayPosition(user.destinations, index, index - 1);
// });

// export const swapPositionDownDestination = (userId, selectedId) => delay(500).then(() => {
//   const user = getUser(userId);
//   const index = findIndexOfDestination(user.destinations, selectedId);
//   user.destinations = swapArrayPosition(user.destinations, index, index + 1);
// });

export const removeDestination = (destinationId) => {
  
};
// End Destinations

// // Begin Places Details
export const fetchPlaceDetail = (placeId) => {
  return database.ref(uris.placesDetails)
    .orderByChild('id')
    .equalTo(parseInt(placeId))
    .once(value)
    .then((snapshot) => {
      const response = snapshot.val();
      const placeDetail = (response.length ? response.filter((value) => {
        return !!value
      })[0] : response[Object.keys(response)[0]]) || {};
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
  review.date = "20/3/2015 20:14"
  review.userId = getUserId();
  review.placeId = parseInt(review.placeId);
  const reviewRef = database.ref(uris.placesDetails + '/' + (review.placeId - 1))
    .child('reviews')
    .push(review);
  return reviewRef.then(() => {
    review.id = reviewRef.key;
  });
};
// End Places Details

