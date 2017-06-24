import React from 'react';
import { StyleSheet, View } from 'react-native';
import Region from '../Region';

const Regions = ({ regions }) => (
  <View>
    {regions.map(region =>
      <Region
        key={region.id}
        {...region}
      />
    )}
  </View> 
);

export default Regions;