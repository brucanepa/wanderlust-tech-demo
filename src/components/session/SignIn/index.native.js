import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Button, TextInput, Alert } from 'react-native';
import { session as sessionActions } from '../../../actions';
import { texts } from '../../../constants';

const SignIn = ({dispatch}) => {
  let username = ''; 
  let password = '';

  const onUsernameChange = (text) => {
    username = text;
  };

  const onPasswordChange = (text) => {
    password = text;
  };

  const onSignInClick = () => {
    if (username && password && username.trim() && password.trim()) {
      return dispatch(sessionActions.signIn(username, password))
    }
  }

  const onPress = () => {
    const result = onSignInClick();
    password = '';
    if (result) {
      result.then(result => {
        if (!result) {
          Alert.alert('', texts.signInError, [{
            text: 'OK',
            onPress: () => console.log('OK Pressed')
          }])
        }
      })
    }
  };

  return (
    <View style={ styles.inputContainer }>
      <TextInput style={ styles.input } onChangeText={ (text) => onUsernameChange(text) } placeholder={ texts.username } />
      <TextInput style={ styles.input } secureTextEntry={true} onChangeText={ (text) => onPasswordChange(text) } placeholder={ texts.password } />
      <Button color="#1e7f7e" onPress={ () => onPress() } title={ texts.signIn } />
    </View>
    );
};

export default connect()(SignIn);

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    width: '70%',
    marginBottom: '3%',
    marginLeft: '15%'
  }, 
  inputContainer: {
    marginTop: '5%'
  }
})
