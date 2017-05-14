import * as firebase from 'firebase';
import { uris } from '../constants';

const config = {
  
};
firebase.initializeApp(config);
const database = firebase.database();
const value = 'value';

// Begin Continents
export const fetchContinents = () => {
  return database.ref(uris.continents).once(value)
    .then(function(snapshot) {
      return snapshot.val();
    }, () => ([]));
};
// End Continents

// Begin Places
export const fetchPlaces = (regionId) => {
  return database.ref(uris.places).orderByChild('regionId').equalTo(parseInt(regionId)).once(value)
    .then((snapshot) => {
      return snapshot.val();
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

// export const fetchPlaceDetail = (placeId) => delay(500).then(() => {
//   return getPlaceDetail(placeId);
// });

// export const addReview = (userId, placeId, comment, rating) => delay(500).then(() => {
//   const review = {
//     id: generateId(),
//     userId: userId,
//     comment: comment,
//     date: "20/3/2015 20:14",
//     rating: rating
//   };
//   getPlaceDetail(placeId).reviews.push(review);
//   return review;
// });
// // End Places Details

