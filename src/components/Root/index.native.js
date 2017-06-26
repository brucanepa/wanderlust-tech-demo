import React from 'react'
import { Provider } from 'react-redux';
import { ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types'
import SessionContainer from '../../containers/SessionContainer';
import PlacesContainer from '../../containers/PlacesContainer';
import PlaceDetailContainer from '../../containers/PlaceDetailContainer';
import ContinentsContainer from '../../containers/ContinentsContainer';

const Root = ({store}) => (
  <Provider store={ store }>
    <ScrollView contentInset={ { top: 20 } } style={ styles.container }>
      <SessionContainer/>
      { /*<PlacesContainer/>*/ }
      <ContinentsContainer/>
      { /*<PlaceDetailContainer/>*/ }
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