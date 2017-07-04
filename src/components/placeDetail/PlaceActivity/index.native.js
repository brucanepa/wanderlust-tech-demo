import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { texts } from '../../../constants';

const PlaceActivity = ({name, description, price}) => (
  <View style={styles.container}>
  	<Text style={styles.name}>{name}</Text>
  	<Text>{description}</Text>
    <Text style={styles.price}>{texts.priceTitle}: {price}</Text>
    <Text/>
  </View>
);

export default PlaceActivity;

const styles = StyleSheet.create({
  container: {
  	marginLeft: '5%',
  	marginRight: '5%',
  	borderBottomColor: '#1e7f7e',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  name: { 
    fontSize: 15,
    fontWeight: 'bold',
  },
  price: {
    fontWeight: 'bold'
  }
})