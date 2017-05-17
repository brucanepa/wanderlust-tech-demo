import { combineReducers } from 'redux';

const loading = (state = {}, action) => {
  
};

const error = (state = {}, action) => {
  
};

const requesting = combineReducers({
  loading,
  error
});

export default requesting;
