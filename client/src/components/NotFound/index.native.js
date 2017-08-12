import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { texts, notFoundImage } from '../../constants';

const NotFound = () => (
  <View style={styles.imageContainer}>
    <Image source={require('../../resources/loading-gear.gif')}/>
  </View>
);

export default NotFound;

const styles = StyleSheet.create({
  imageContainer: {
  	flexDirection: 'row',
  	justifyContent: 'center',
  	backgroundColor: 'aliceblue',
  	height: '100%'
  },
})