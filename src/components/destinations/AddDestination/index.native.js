import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AddDestination = ({onClick}) => (
  <View>
    <Button type="button" onClick={ (e) => onClick(e) }>add</Button>
  </View>
);

export default AddDestination;


