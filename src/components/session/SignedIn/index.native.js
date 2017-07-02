import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { texts } from '../../../constants';

const SignedIn = ({onSignOutClick, name}) => (
  <View style={ styles.button } >
    <Button color='#1e7f7e' onPress={ (e) => onSignOutClick(e) } title={ texts.signOut } />
  </View>
);

export default SignedIn;

const styles = StyleSheet.create({
  button: {
    marginTop: '3%',
  }
})