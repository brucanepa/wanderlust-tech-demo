import { combineReducers } from 'redux'
import { actionsTypes as actions } from '../constants'

const user = (state = {}, action) => {
  switch (action.type) {
    case actions.receiveSignInSucces:
      return {...action.sessionResponse};
    case actions.requestSignOut:
      return {};
    default:
      return state;
  }
};

const signedIn = (state = false, action) => {
  switch (action.type) {
    case actions.receiveSignInSucces:
      return true;
    case actions.requestSignOut:
      return false;
    default:
      return state;
  }
};

const signingIn = (state = false, action) => {
  switch (action.type) {
    case actions.requestSignIn:
      return !action.error;
    case actions.receiveSignInSucces:
      return false;
    default:
      return state;
  }
};

const session = combineReducers({
  user,
  signedIn,
  signingIn
});

export default session;

export const getUser = (state) => {
  return state.user;
};

export const isSignedIn = (state) => {
  return state.signedIn;
};

export const isSigningIn = (state) => {
  return state.signingIn;
};