import wanderApp from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
//import logger from 'redux-logger';
import { loadState, saveState } from './utils/localStorage';
import throttle from 'lodash/throttle';

const updateLocalStorage = (store) => {
  let signedIn = store.getState().session.signedIn;
  store.subscribe(throttle(() => {
    const session = store.getState().session;
    if (signedIn != session.signedIn) {
      signedIn = session.signedIn;
      saveState({
        session
      });
    }
  }), 1000);
};

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
  
  updateLocalStorage(store);

  return store;
}

export default configureStore;
