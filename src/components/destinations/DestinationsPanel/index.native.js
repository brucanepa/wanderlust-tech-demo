import React from 'react';
import { StyleSheet, View } from 'react-native';
import Destinations from '../Destinations';
import DestinationsFooter from '../DestinationsFooter';

const DestinationsPanel = () => (
  <View>
    <Destinations/>
    <DestinationsFooter/>
  </View>
);

export default DestinationsPanel;
