import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import DestinationsPanel from '../../destinations/DestinationsPanel';
import { texts } from '../../../constants';

const SignedIn = ({onSignOutClick, name}) => (
  <View>
    <DestinationsPanel name={name}/>
    <Button onPress={ (e) => onSignOutClick(e) }
      title={texts.signOut} />
  </View>
);

export default SignedIn;
