import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { texts } from '../../../constants';
import container from '../../../containers/AddDestinationContainer';

const AddDestination = ({onClick, signedIn}) => (
  <View>
    <Button onPress={ onClick } title={ texts.add } disabled={signedIn} />
  </View>
);

export default container(AddDestination);
