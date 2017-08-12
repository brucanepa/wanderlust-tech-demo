import { combineReducers } from 'redux';

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

export const showLoading = (state) => {
  return state.loading.show;
};

export const showError = (state) => {
  return state.error.show;
};