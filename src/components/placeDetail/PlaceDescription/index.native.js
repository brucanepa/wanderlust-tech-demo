import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { texts } from '../../../constants';

const PlaceDescription = ({ description }) => (
  <View>
		<Text>{texts.descriptionTitle}</Text>
		<Text/>
		<Text>{description}</Text>
	</View>
);

export default PlaceDescription;