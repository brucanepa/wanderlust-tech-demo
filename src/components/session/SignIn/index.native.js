import React from 'react';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';
import { session as sessionActions } from '../../../actions';
import { texts } from '../../../constants';

const SignIn = ({dispatch}) => {
  let username = 'bruno@gmail.com';
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

  return (
    <View>
      <Text>{texts.username}</Text>
      <TextInput onChangeText={(text) => onUsernameChange({text})}
        value={this.state.text}  />
      <Text>{texts.password}</Text>
      <TextInput onChangeText={(text) => onPasswordChange({text})}
          value={this.state.text}/>
      <Button onPress={ (e) => {
          const result = onSignInClick();
          {
            if (!result) {
              password = '';
            }
          }
        } }
        title={ texts.signIn } />
    </View>
  );
};

export default SignIn;

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
  },
})
