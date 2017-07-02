import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Region from '../Region';

const Regions = (props) => (
  <ScrollView>
    { props.regions && props.regions.map(region => <Region key={ region.id } {...region} navigation={ props.navigation } />) }
  </ScrollView>
);

export default Regions;
