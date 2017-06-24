import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { texts } from '../../../constants';

const PlaceActivity = ({name, description, price}) => (
  <View>
  	<h2>{name}</h2>
  	<Text>{description}</Text>
    <Text>{texts.priceTitle}: {price}</Text>
    <Text/>
  </View>
);

export default PlaceActivity;