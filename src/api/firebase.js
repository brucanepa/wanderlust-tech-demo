import * as firebase from 'firebase';
import { uris } from '../constants';
import { getUserId } from '../constants';

const config = {
  
};
firebase.initializeApp(config);
const database = firebase.database();
const value = 'value';

const continentsRef = database.ref(uris.continents);

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
export const fetchDestinations = () => {
  const promise = new Promise((resolve, reject) => {
    continentsRef
      .on(value, database.ref(uris.users)
        .orderByChild('id')
        .equalTo(getUserId())
        .on(value, (snapshot) => {
          const response = snapshot.val();
          const destinations = response && response[0] && response[0].destinations;
          resolve(destinations ? destinations.sort((a, b) => (a.order > b.order)) : []);
        }), () => (reject([])));
  });
  return promise;
};

export const addDestination = (destination) => {
  const usersRef = database.ref(uris.users);
  // .orderByChild('id')
  // .equalTo(parseInt(destination.placeId))
  // .once(value)
  // .then();
  const pushRef = usersRef.child('destinations').push(destination);
  const destinationKey = pushRef.key;
  return usersRef.child('destinations')
    .push(destination)
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
  const detailRef = database.ref(uris.placesDetails)
  // .orderByChild('id')
  // .equalTo(parseInt(review.placeId))
  // .once(value)
  // .then();
  const pushRef = detailRef.child('reviews').push(review);
  const reviewKey = pushRef.key;
  return detailRef.child('reviews')
    .push(review)
    .then((snapshot) => {
      review.id = reviewKey;
    });
};
// End Places Details

