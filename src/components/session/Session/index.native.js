import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DestinationsPanel from '../../destinations/DestinationsPanel';
import SignedIn from '../SignedIn';
import SignIn from '../SignIn';
import { texts } from '../../../constants';

const Session = (props) => (
  <View>  
    <Text>
      {texts.destinationsTitle}
    </Text>
    <Text>
      {props.name}
    </Text>
    {props.signedIn && <DestinationsPanel/>}
    {props.signedIn ? <SignedIn {...props}/> : <SignIn {...props} />}
  </View>
);

export default Session;