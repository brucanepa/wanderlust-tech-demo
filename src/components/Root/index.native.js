import React from 'react'
import PropTypes from 'prop-types'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Root = ({store}) => (
  <ScrollView
    contentInset={{ top: 20 }}
    style={styles.container}
  >
  </ScrollView>
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