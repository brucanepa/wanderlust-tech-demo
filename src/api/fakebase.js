import { generateId, swapArrayPosition, removeArrayElement } from '../utils/helpers';
import { getUserId } from '../constants';

const id1 = generateId();
const id2 = generateId();
const id3 = generateId();

const continents = [{
  id: 2,
  name: 'Europa',
  regions: [{
    id: 4,
    name: 'Europa Sur'
  }, {
    id: 5,
    name: 'Europa Central'
  }, {
    id: 6,
    name: 'Europa Sur'
  }]
}, {
  id: 1,
  name: 'America',
  regions: [{
    id: 1,
    name: 'America del Sur'
  }, {
    id: 2,
    name: 'America Central'
  }, {
    id: 3,
    name: 'America del Norte'
  }]
}];

const user = {
  id: getUserId(),
  destinations: [{
    id: generateId(),
    placeId: id1,
    name: 'Barcelona'
  }, {
    id: generateId(),
    placeId: id2,
    name: 'Munich'
  }]
};

const fakeDatabase = {
  continents: continents,
  places: [{
    id: id1,
    name: 'Barcelona',
    regionId: 4
  }, {
    id: id2,
    name: 'Montevideo',
    regionId: 1
  }, {
    id: id3,
    name: 'Miami',
    regionId: 3
  }],
  users: [user],
  placesDetails: [{
    id: id1,
    description: 'Descripcion 1',
    activities: [{
      id: generateId(),
      name: 'Actividad 1',
      description: 'Descripcion actividad 1'
    }],
    reviews: [{
      id: generateId(),
      userId: getUserId(),
      comment: "muy lindo",
      date: "20/3/2015 20:14",
      rate: 5
    }],
    rateAvarage: 5
  }, {
    id: id2,
    description: 'Descripcion 2',
    activities: [{
      id: generateId(),
      name: 'Actividad 2',
      description: 'Descrpicion actividad 2'
    }],
    reviews: [{
      id: generateId(),
      userId: getUserId(),
      comment: "muy feo",
      date: "20/3/2015 20:14",
      rate: 1
    }],
    rateAvarage: 5
  }, {
    id: id3,
    description: 'Descripcion 3',
    activities: [{
      id: generateId(),
      name: 'Actividad 3',
      description: 'Descrpicion actividad 3'
    }],
    reviews: [{
      id: generateId(),
      userId: getUserId(),
      comment: "muy mal",
      date: "20/3/2015 20:14",
      rate: 2
    }],
    rateAvarage: 5
  }]
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const getUser = (userId) => {
  let user = null;
  fakeDatabase.users.some((u) => {
    user = u.id == userId && u;
    return user;
  })
  return user;
};

// Begin Places
export const fetchPlaces = (regionId) => delay(500).then(() => {
  return fakeDatabase.places.filter((place) => (place.regionId == regionId));
});

// End Places

// Begin Destinations
export const addDestination = (userId, placeId) => delay(500).then(() => {
  const place = {
    id: generateId(),
    placeId,
    name: fakeDatabase.places.filter((place) => {
      return place.id == placeId
    })[0].name
  };
  const user = getUser(userId);
  user && user.destinations.push(place);

  return place;
});

const findIndexOfDestination = (array, id) => {
  return array.map((place) => {
    return place.id
  }).indexOf(id);
};

export const swapPositionUpDestination = (userId, selectedId) => delay(500).then(() => {
  const user = getUser(userId);
  const index = findIndexOfDestination(user.destinations, selectedId);
  user.destinations = swapArrayPosition(user.destinations, index, index - 1);
});

export const swapPositionDownDestination = (userId, selectedId) => delay(500).then(() => {
  const user = getUser(userId);
  const index = findIndexOfDestination(user.destinations, selectedId);
  user.destinations = swapArrayPosition(user.destinations, index, index + 1);
});

export const fetchDestinations = (userId) => delay(500).then(() => {
  return getUser(userId).destinations;
});

export const removeDestination = (userId, selectedId) => delay(500).then(() => {
  const user = getUser(userId);
  const index = findIndexOfDestination(user.destinations, selectedId);
  user.destinations = removeArrayElement(user.destinations, index);
  return user.destinations;
});
// End Destinations

// Begin Places Details
const getPlaceDetail = (placeId) => {
  let placeDetail = null;
  fakeDatabase.placesDetails.some((p) => {
    placeDetail = p.id == placeId && p;
    return placeDetail;
  })
  return placeDetail;
}

export const fetchPlaceDetail = (placeId) => delay(500).then(() => {
  return getPlaceDetail(placeId);
});

export const addReview = (userId, placeId, comment, rate) => delay(500).then(() => {
  const review = {
    id: generateId(),
    userId: userId,
    comment: comment,
    date: "20/3/2015 20:14",
    rate: rate
  };
  getPlaceDetail(placeId).reviews.push(review);
  return review;
});
// End Places Details

// Begin Continents
export const fetchContinents = () => delay(500).then(() => {
  return fakeDatabase.continents;
});
// End Continents
