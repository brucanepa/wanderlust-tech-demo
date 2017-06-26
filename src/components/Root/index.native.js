import React from 'react'
import { Provider } from 'react-redux';
import { ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types'
import Session from '../../components/session/Session';
import Places from '../../components/places/Places';
import PlaceDetail from '../../components/placeDetail/PlaceDetail';
import Continents from '../../components/continents/Continents';

const Root = ({store}) => (
  <Provider store={ store }>
    <ScrollView contentInset={ { top: 20 } } style={ styles.container }>
      <Session/>
      { /*<Places/>*/ }
      <Continents/>
      { /*<PlaceDetail/>*/ }
    </ScrollView>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  todo: {
    backgroundColor: 'red'
  }
});

export default Root