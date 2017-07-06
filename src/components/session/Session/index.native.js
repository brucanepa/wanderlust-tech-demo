import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { texts } from '../../../constants';
import DestinationsPanel from '../../destinations/DestinationsPanel';
import SignedIn from '../SignedIn';
import SignIn from '../SignIn';
import Loading from '../../NotFound';
import container from '../../../containers/SessionContainer';

const Session = (props) => (
  <View style={styles.container}>
    <ScrollView>
      <Text style={ styles.destinationsTitle }>
        { texts.destinationsTitle }
      </Text>
      <Text style={ styles.name }>
        { props.name }
      </Text>
      { props.showLoading && props.signingIn && <Loading/> }
      { props.signedIn && <DestinationsPanel/> }
      { props.signingIn ? <View/> : props.signedIn ? <SignedIn {...props}/> : <SignIn {...props} /> }
    </ScrollView>
  </View>
);

export default container(Session);

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'aliceblue',
    height: '100%'
  },
  destinationsTitle: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  name: { 
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
