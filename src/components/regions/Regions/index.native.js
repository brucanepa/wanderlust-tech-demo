import React from 'react';
import { StyleSheet, View } from 'react-native';
import Region from '../Region';

const Regions = (props) => (
  <View>
    { props.regions && props.regions.map(region => <Region key={ region.id } {...region} navigation={ props.navigation } />) }
  </View>
);

export default Regions;