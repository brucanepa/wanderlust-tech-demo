import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import Regions from '../../regions/Regions';
import { texts } from '../../../constants';

const Continent = ({name, regions, navigation}) => (
    <View>
      <Text style={styles.title}>
        { texts.regions }
      </Text>
      <Regions regions={ regions } navigation={navigation}/>
    </View>
);

export default Continent;

const styles = StyleSheet.create({
  title: { 
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
