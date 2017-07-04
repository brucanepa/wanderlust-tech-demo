import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { texts } from '../../../constants';

const PlaceDescription = ({ description }) => (
  	<View>
		<Text style={styles.title}>{texts.descriptionTitle}</Text>
		<Text style={styles.description}>{description}</Text>
	</View>
);

export default PlaceDescription;

const styles = StyleSheet.create({
  title: { 
    fontSize: 20,
    textAlign: 'center',
    marginTop: '3%'
  },
  description: {
    marginLeft: '5%',
    marginRight: '5%',
  	borderBottomColor: '#1e7f7e',
    borderBottomWidth: StyleSheet.hairlineWidth
  }
})