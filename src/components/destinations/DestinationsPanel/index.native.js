import React from 'react';
import { StyleSheet, View } from 'react-native';
import DestinationsContainer from '../../../containers/DestinationsContainer';
import DestinationsFooterContainer from '../../../containers/DestinationsFooterContainer';

const DestinationsPanel = () => (
  <View>
    <DestinationsContainer />
    <DestinationsFooterContainer/>
  </View>
);

export default DestinationsPanel;