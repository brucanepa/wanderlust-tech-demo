import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import SessionContainer from '../../containers/SessionContainer';
import PlacesContainer from '../../containers/PlacesContainer';
import PlaceDetailContainer from '../../containers/PlaceDetailContainer';
import ContinentsContainer from '../../containers/ContinentsContainer';
import styled from 'styled-components';

const Root = ({store}) => (
  <Provider store={ store }>
    <Router>
      <MainRoot>
        <MainApp>
          <SessionContainer/>
          <Switch>
            <Route exact={true} path='/regions/:regionId' component={ PlacesContainer } />
            <Route exact={true} path='/continents' component={ ContinentsContainer } />
            <Route exact={true} path='/places/:placeId' component={ PlaceDetailContainer } />
            <Route exact={true} path='*' render={ () => (<Redirect to="/continents"> </Redirect>) } />
          </Switch>
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
    transition: 0.8s;
    &:after {
      content: "";
      clear: both;
      display: table;
    }
`;

export default Root;
