import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Regions from '../../regions/Regions';

const Continent = ({name, regions}) => (
  <View>
    <Text>
      { name }
    </Text>
    <Regions regions={ regions } />
  </View>
);

export default Continent;
