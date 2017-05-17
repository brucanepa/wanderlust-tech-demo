import actions from './actionTypes';

const defaultUserId = 1;

export const getUserId = () => (defaultUserId);

export const apiUris = {
  continents: '/continents',
  regions: '/regions',
  places: '/places',
  users: '/users',
  placesDetails: '/placesDetails'
}

export const defaultImage = 'http://cdn.wallpapersafari.com/6/52/ied8HY.jpeg';

export const actionsTypes = actions;