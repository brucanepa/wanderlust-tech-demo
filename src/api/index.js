import { generateId } from '../utils/helpers';

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
    placeId
  };
  fakeDatabase.placesToVisit.push(place);
  return place;
});

/*export const changePositionUpPlaceToVisit = (index) => delay(500).then(() => {
  //A[x] = A.splice(y, 1, A[x])[0];
  const places = fakeDatabase.placesToVisit.find(t => t.id === id); //todo
  return places;
});

export const changePositionDownPlaceToVisit = (id) => delay(500).then(() => {
  //A[x] = A.splice(y, 1, A[x])[0];
  const places = fakeDatabase.placesToVisit.find(t => t.id === id); //todo
  return places;
});*/

export const fetchPlacesToVisit = () => delay(500).then(() => {
  return fakeDatabase.placesToVisit;
});
// End Places To Visit
