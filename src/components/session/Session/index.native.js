import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { texts } from '../../../constants';
import DestinationsPanel from '../../destinations/DestinationsPanel';
import SignedIn from '../SignedIn';
import SignIn from '../SignIn';
import container from '../../../containers/SessionContainer';

const Session = (props) => {
  props.navigation.name = 'asd';
  props.navigation.title = 'asdt';
  
  return (
    <View style={ styles.container }>
      <Text>
        { texts.destinationsTitle }
      </Text>
      <Text>
        { props.name }
      </Text>
      <Text/>
      { props.signedIn && <DestinationsPanel/> }
      { props.signedIn ? <SignedIn {...props}/> : <SignIn {...props} /> }
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  }
});

export default container(Session);