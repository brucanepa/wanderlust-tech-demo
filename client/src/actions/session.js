import api, { nodeApi } from '../api';
import { session as requests } from './requests';
import errorHandler from './errorHandler';

export const signIn = (email, password) => (dispatch) => {
  dispatch(requests.requestSignIn());
  return nodeApi.signIn(email, password)
    .then((response) => {
      if (response.errorCode) {
        errorHandler(dispatch, requests.requestSignIn().type);
        return false;
      } else {
        dispatch(requests.receiveSignInSuccess(response));
        return true;
      }
    });
}

export const signOut = () => (dispatch) => {
  dispatch(requests.requestSignOut());
  return nodeApi.signOut()
    .then(() => {
      dispatch(requests.receiveSignOutSuccess())
    });
}
