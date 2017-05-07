import { generateId, swapArrayPosition } from '../utils/helpers';

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
  placesToVisit: [{
    id: generateId(),
    placeId: id1,
    name: 'Paris'
  }, {
    id: generateId(),
    placeId: id2,
    name: 'Munich'
  }]
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Begin Places
export const fetchPlaces = () => delay(500).then(() => {
  return fakeDatabase.places;
});
// End Places

// Begin Places To Visit
export const addPlaceToVisit = (placeId) => delay(500).then(() => {
  const place = {
    id: generateId(),
    placeId,
    name: fakeDatabase.places.filter((place) => { return place.id == placeId })[0].name
  };
  fakeDatabase.placesToVisit.push(place);
  return place;
});

const findIndexOfPlaceToVisit = (array, id) => {
  return array.map((place) => { return place.id}).indexOf(id);
};

export const swapPositionUpPlaceToVisit = (selectedId) => delay(500).then(() => {  
  const index = findIndexOfPlaceToVisit(fakeDatabase.placesToVisit, selectedId);
  fakeDatabase.placesToVisit = swapArrayPosition(fakeDatabase.placesToVisit, index, index-1);
});

export const swapPositionDownPlaceToVisit = (selectedId) => delay(500).then(() => {
  const index = findIndexOfPlaceToVisit(fakeDatabase.placesToVisit, selectedId);
  fakeDatabase.placesToVisit = swapArrayPosition(fakeDatabase.placesToVisit, index, index+1);
});

export const fetchPlacesToVisit = () => delay(500).then(() => {
  return fakeDatabase.placesToVisit;
});
// End Places To Visit
