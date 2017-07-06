import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { texts } from '../../../constants';

const SignedIn = ({onSignOutClick, name}) => (
  	<View style={ styles.inputContainer }>
       <View style={ styles.signedIn } >
	    <Button color='#1e7f7e' onPress={ (e) => onSignOutClick(e) } title={ texts.signOut } />
	  </View>
    </View>
);

export default SignedIn;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    marginTop: '5%',
    width: '95%'
  },
  signedIn: {
    width: '70%',
    marginLeft: '5%'
  }
})