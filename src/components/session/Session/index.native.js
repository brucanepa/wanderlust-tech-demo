import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { texts } from '../../../constants';
import DestinationsPanel from '../../destinations/DestinationsPanel';
import SignedIn from '../SignedIn';
import SignIn from '../SignIn';
import Loading from '../../NotFound';
import container from '../../../containers/SessionContainer';

const Session = (props) => (
  <View style={ styles.container }>
    <Text>
      { texts.destinationsTitle }
    </Text>
    <Text>
      { props.name }
    </Text>
    <Text/>
    { props.showLoading && props.signingIn && <Loading/> }
    { props.signedIn && <DestinationsPanel/> }
    { props.signingIn ? <View/> : props.signedIn ? <SignedIn {...props}/> : <SignIn {...props} /> }
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  }
});

export default container(Session);