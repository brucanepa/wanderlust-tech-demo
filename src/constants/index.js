import actions from './actionTypes';
import textMessages from './texts';

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

export const notFoundImage = 'https://cdn1.iconfinder.com/data/icons/earth-set/512/Earth_Set_Earth_Planet_Globe_Australia_Asia_Indian_mainland-512.png';

export const actionsTypes = actions;

export const texts = textMessages;

export const wanderLustVR = "https://wander-lust-vr.firebaseapp.com/?image=";
