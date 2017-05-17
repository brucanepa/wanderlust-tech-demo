import { combineReducers } from 'redux';
import { actionsTypes as actions } from '../constants';

const hide = (state, receive, specific) => {
  return (specific || receive) && state.show
};

const loading = (state = {}, action) => {
  if (action.requesting) {
    return {
      show: true
    };
  } else if (hide(state, action.receive, action.error)){
    return {
      show: false
    };
  }
  return state;
};

const error = (state = {}, action) => {
  if (action.error) {
    return {
      show: true
    };
  } else if (hide(state, action.receive, action.requesting)) {
    return {
      show: false
    };
  }
  return state;
};

const requesting = combineReducers({
  loading,
  error
});

export default requesting;

const showLoading = (state) => {
  return state.loading.show;
};

const showError = (state) => {
  return state.error.show;
};