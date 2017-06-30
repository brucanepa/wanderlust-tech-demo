import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Button, TextInput, Text, Image } from 'react-native';
import { session as sessionActions } from '../../../actions';
import { texts } from '../../../constants';

const SignIn = ({dispatch}) => {
  let username = 'bruno@gmail.com'; //ToDo: delete default username
  let password = '';

  const onUsernameChange = (text) => {
    username = text;
  };

  const onPasswordChange = (text) => {
    password = text;
  };

  const onSignInClick = () => {
    if (username && password && username.trim() && password.trim()) {
      return dispatch(sessionActions.signIn(username, password));
    }
  }

  const onPress = () => {
    const result = onSignInClick();
    if (!result) {
      password = '';
    }
  };

  return (
    <View>
      <TextInput style={ styles.input } onChangeText={ (text) => onUsernameChange(text) } value={ username } placeholder={ texts.username } />
      <TextInput style={ styles.input } onChangeText={ (text) => onPasswordChange(text) } placeholder={ texts.password } />
      <Button onPress={ () => onPress() } title={ texts.signIn } />
    </View>
    );
};

export default connect()(SignIn);

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 44,
    borderWidth: 0.5,
    borderColor: '#fafafa',
    padding: 8,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: 'white',
  }
})
