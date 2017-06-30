import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { texts, notFoundImage } from '../../constants';

const NotFound = () => (
  <View>
    <Text>
      { texts.placeNotFound }
    </Text>
    {/*<Image source={notFoundImage}/>*/}
  </View>
);

export default NotFound;

// ToDo: Image