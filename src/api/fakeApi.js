import { generateId, swapArrayPosition, removeArrayElement } from '../utils/helpers';

var id1 = generateId();
var id2 = generateId();
var id3 = generateId();

const fakeDatabase = {
  places: [{
    id: id1,
    name: 'Paris'
  }, {
    id: id2,
    name: 'Munich'
  }, {
    id: id3,
    name: 'Barcelona'
  }],
  destinations: [{
    id: generateId(),
    placeId: id1,
    name: 'Paris'
  }, {
    id: generateId(),
    placeId: id2,
    name: 'Munich'
  }],
  reviews: [{
    id: generateId(),
    placeId: id1,
    comment: "muy lindo",
    date: "20/3/2015 20:14",
    rate: 5
  }]
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Begin Places
export const fetchPlaces = () => delay(500).then(() => {
  return fakeDatabase.places;
});

// End Places

// Begin Places To Visit
export const addDestination = (placeId) => delay(500).then(() => {
  const place = {
    id: generateId(),
    placeId,
    name: fakeDatabase.places.filter((place) => {
      return place.id == placeId
    })[0].name
  };
  fakeDatabase.destinations.push(place);
  return place;
});

const findIndexOfDestination = (array, id) => {
  return array.map((place) => {
    return place.id
  }).indexOf(id);
};

export const swapPositionUpDestination = (selectedId) => delay(500).then(() => {
  const index = findIndexOfDestination(fakeDatabase.destinations, selectedId);
  fakeDatabase.destinations = swapArrayPosition(fakeDatabase.destinations, index, index - 1);
});

export const swapPositionDownDestination = (selectedId) => delay(500).then(() => {
  const index = findIndexOfDestination(fakeDatabase.destinations, selectedId);
  fakeDatabase.destinations = swapArrayPosition(fakeDatabase.destinations, index, index + 1);
});

export const fetchDestinations = () => delay(500).then(() => {
  return fakeDatabase.destinations;
});

export const removeDestination = (selectedId) => delay(500).then(() => {
  const index = findIndexOfDestination(fakeDatabase.destinations, selectedId);
  fakeDatabase.destinations = removeArrayElement(fakeDatabase.destinations, index);
  return fakeDatabase.destinations;
});
// End Places To Visit
