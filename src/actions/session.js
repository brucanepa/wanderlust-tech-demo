import api from '../api';
import { normalize } from 'normalizr';
import * as schema from './schema';
import { session as requests } from './requests';
import errorHandler from './errorHandler';

export const signIn = (email, password) => (dispatch) => {
  dispatch(requests.requestSignIn());
  return api.signIn(email, password)
    .then((response) => {
      if (response.errorCode) {
        errorHandler(dispatch, requests.requestSignIn().type)
      } else {
        dispatch(requests.receiveSignInSuccess(response))
      }
    });
}

export const signOut = () => (dispatch) => {
  dispatch(requests.requestSignOut());
  return api.signOut()
    .then(() => {
      dispatch(requests.receiveSignOutSuccess())
    });
}
