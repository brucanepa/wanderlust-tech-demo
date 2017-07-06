import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Session from '../../components/session/Session';
import Places from '../../components/places/Places';
import PlaceDetail from '../../components/placeDetail/PlaceDetail';
import Continents from '../../components/continents/Continents';

const Root = ({store}) => (
  <Provider store={ store }>
    <Router>
      <MainRoot>
        <MainApp>
          <Session/>
          <Switch>
            <Route exact={true} path='/regions/:regionId' component={ Places } />
            <Route exact={true} path='/continents' component={ Continents } />
            <Route exact={true} path='/places/:placeId' component={ PlaceDetail } />
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
