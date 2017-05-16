import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import DestinationsPanel from './destinations/DestinationsPanel';
import PlacesContainer from './places/PlacesContainer';
import PlaceDetailContainer from './placeDetail/PlaceDetailContainer';
import ContinentsContainer from './continents/ContinentsContainer';
import styled from 'styled-components';

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <MainRoot>
        <MainApp>
          <DestinationsPanel/>
	      	<Route path='/regions/:regionId' component={PlacesContainer}/>
	      	<Route exact={true} path='/continents' component={ContinentsContainer}/>
	      	<Route path='/places/:placeId' component={PlaceDetailContainer}/>
	        <Route exact={true} path='*' render={() => (<Redirect to="/continents"> </Redirect>)} />
     	  </MainApp>
      </MainRoot>
    </Router>
  </Provider>
);

const MainRoot = (props) => (
	<div {...props}/>
);

const MainApp = styled.div`
    box-sizing: border-box;
    transition: 0.5s;
    &:after {
      content: "";
      clear: both;
      display: table;
    }
`;


export default Root;
