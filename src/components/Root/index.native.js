import React from 'react'
import { Provider } from 'react-redux';
import { TabNavigator, StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types'
import { texts } from '../../constants';
import Session from '../../components/session/Session';
import Places from '../../components/places/Places';
import PlaceDetail from '../../components/placeDetail/PlaceDetail';
import Continents from '../../components/continents/Continents';

const Root = ({store}) => (
  <Provider store={ store }>
    <Stack/>
  </Provider>
);

const Tab = TabNavigator({
  SessionTab: {
    screen: Session,
    navigationOptions: {
      title: texts.myTripTitle
    }
  },
  ContinentsTab: {
    screen: Continents,
    navigationOptions: {
      title: texts.find
    }
  }
});

const Stack = StackNavigator({
  Home: {
    screen: Tab
  },
  Places: {
    screen: Places,
    navigationOptions: {
      title: texts.places
    },
  },
  PlaceDetail: {
    screen: PlaceDetail,
    navigationOptions: {
      title: texts.placeDetail
    }
  }
});

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;