import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { texts } from '../../../constants';

const SignedIn = ({onSignOutClick, name}) => (
  <View>
    <Button onPress={ (e) => onSignOutClick(e) } title={ texts.signOut } />
  </View>
);

export default SignedIn;
