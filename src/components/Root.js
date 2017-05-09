import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import DestinationsPanel from './destinations/DestinationsPanel';
import VisiblePlaces from './places/VisiblePlaces';
import PlaceDetail from './places/PlaceDetail';

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <MainRoot>
        <DestinationsPanel/>
        <MainApp>
	        <Route exact={true} path='/' render={() => (<Redirect to="/places"> </Redirect>)} />
	      	<Route exact={true} path='/places' component={VisiblePlaces}/>
	      	<Route path='/places/:placeId' component={PlaceDetail}/>
     	</MainApp>
      </MainRoot>
    </Router>
  </Provider>
);

const MainRoot = (props) => (
	<div {...props}/>
);

const MainApp = (props) => (
	<div className="Main" {...props}/>
);

export default Root;
