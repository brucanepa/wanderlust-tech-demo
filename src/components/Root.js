import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import DestinationsPanel from './destinations/DestinationsPanel';
import PlacesContainer from './places/PlacesContainer';
import PlaceDetailContainer from './places/PlaceDetailContainer';
import ContinentsContainer from './continents/ContinentsContainer';

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <MainRoot>
        <DestinationsPanel/>
        <MainApp>
	        <Route exact={true} path='/' render={() => (<Redirect to="/continents"> </Redirect>)} />
	      	<Route path='/regions/:regionId' component={PlacesContainer}/>
	      	<Route exact={true} path='/continents' component={ContinentsContainer}/>
	      	<Route path='/places/:placeId' component={PlaceDetailContainer}/>
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
