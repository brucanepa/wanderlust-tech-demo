import { schema } from 'normalizr';

export const place = new schema.Entity('places');
export const arrayOfPlaces = new schema.Array(place);

export const placeToVisit = new schema.Entity('placesToVisit');
export const arrayOfPlacesToVisit = new schema.Array(placeToVisit);
