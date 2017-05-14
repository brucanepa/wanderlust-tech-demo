import * as firebase from 'firebase';
import { uris } from '../constants';
import { normalize } from 'normalizr';
import * as schema from '../actions/schema';
import { continents as requests } from '../actions/requests';

const config = {
 
};
firebase.initializeApp(config);
const database = firebase.database();
const value = 'value';

const continentsRef = database.ref(uris.continents);
const placesRef = database.ref(uris.places);
const placesDetailsRef = database.ref(uris.placesDetails);

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
  return placesRef
    .orderByChild('regionId')
    .equalTo(parseInt(regionId))
    .once(value)
    .then((snapshot) => {
      return snapshot.val() || [];
    })
};
// End Places

// // Begin Destinations
// export const fetchDestinations = (userId) => delay(500).then(() => {
//   return getUser(userId).destinations;
// });

// export const addDestination = (userId, placeId) => delay(500).then(() => {
//   const place = {
//     id: generateId(),
//     placeId,
//     name: fakeDatabase.places.filter((place) => {
//       return place.id == placeId
//     })[0].name
//   };
//   const user = getUser(userId);
//   user && user.destinations.push(place);

//   return place;
// });

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

// export const removeDestination = (userId, selectedId) => delay(500).then(() => {
//   const user = getUser(userId);
//   const index = findIndexOfDestination(user.destinations, selectedId);
//   user.destinations = removeArrayElement(user.destinations, index);
//   return user.destinations;
// });
// // End Destinations

// // Begin Places Details
// const getPlaceDetail = (placeId) => {
//   let placeDetail = null;
//   fakeDatabase.placesDetails.some((p) => {
//     placeDetail = p.id == placeId && p;
//     return placeDetail;
//   })
//   return placeDetail;
// }

export const fetchPlaceDetail = (placeId) => {
  return placesDetailsRef
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

export const addReview = (userId, placeId, comment, rating) => {
  const review = {
    userId,
    comment,
    date: "20/3/2015 20:14",
    rating
  };
  return database.ref(uris.placesDetails + '/' + placeId + '/reviews')
    .push(review)
    .then((snapshot) => {
      return snapshot;
    });
};
// End Places Details

