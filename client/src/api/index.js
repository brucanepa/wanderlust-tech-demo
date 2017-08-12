import * as fakebase from './fakebase';
import * as firebase from './firebase';
import * as nodebase from './nodebase';

const api = firebase;

export default api;

export const fakeApi = fakebase;

export const nodeApi = nodebase;
