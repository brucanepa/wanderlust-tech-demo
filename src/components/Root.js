import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ToVisitPanel from './toVisit/ToVisitPanel';
import Places from './places/Places';
import PlaceDetail from './places/PlaceDetail';

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <MainRoot>
        <ToVisitPanel/>
        <MainApp>
	        <Route exact={true} path='/' render={() => (<h1> Welcome </h1>)} />
	      	<Route exact={true} path='/places' component={Places}/>
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
