import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ToVisitPanel from './ToVisitPanel';
import Places from './Places';

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <MainRoot>
        <ToVisitPanel/>
        <MainApp>
	        <Route exact={true} path='/' render={() => (<h1> Welcome </h1>)} />
	      	<Route path='/places' component={Places}/>
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
