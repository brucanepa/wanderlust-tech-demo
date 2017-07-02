import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Regions from '../../regions/Regions';
import { texts } from '../../../constants';

const Continent = ({name, regions, navigation}) => (
  <View style={styles.container}>
    <Text style={styles.title}>
      { texts.regions }
    </Text>
    <Regions regions={ regions } navigation={navigation}/>
  </View>
);

export default Continent;

const styles = StyleSheet.create({
  container:{ 
    height: '85%'
  },
  title: { 
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
