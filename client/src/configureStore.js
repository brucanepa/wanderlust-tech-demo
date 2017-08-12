import wanderApp from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
//import logger from 'redux-logger';
import { loadState, saveState } from './utils/localStorage';
import throttle from 'lodash/throttle';

const configureStore = () => {
  const middlewares = [thunkMiddleware];

  /*if(process.env.NODE_ENV !== 'production'){
    middlewares.push(logger);
  }*/

  const persistedState = loadState();

  const store = createStore(
    wanderApp,
    persistedState,
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares),
  );

  store.subscribe(throttle(() => {
    saveState({
      session: store.getState().session
    });
  }), 1000);

  return store;
}

export default configureStore;
