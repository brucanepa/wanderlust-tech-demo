import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';
import { texts } from '../../../constants';
import container from '../../../containers/AddDestinationContainer';

const showResult = (onClick) => {
  const result = onClick();
  Alert.alert('', result ? texts.added : texts.error, [{
    text: 'OK',
    onPress: () => console.log('OK Pressed')
  }])
};

const AddDestination = ({onClick, signedIn}) => (
	<Button color='#1e7f7e' onPress={ () => showResult(onClick) } title={ texts.add } disabled={ !signedIn } />
);

export default container(AddDestination);
