import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Regions from '../../regions/Regions';
import { texts } from '../../../constants';

const Continent = ({name, regions, navigation}) => (
  <View>
    <Text>
      { texts.regions }
    </Text>
    <Regions regions={ regions } navigation={navigation}/>
  </View>
);

export default Continent;
