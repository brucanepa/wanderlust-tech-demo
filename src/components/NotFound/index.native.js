import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { texts, notFoundImage } from '../../constants';

const NotFound = () => (
  <View>
    <Image source={require('../../resources/loading-gear.gif')}/>
  </View>
);

export default NotFound;
