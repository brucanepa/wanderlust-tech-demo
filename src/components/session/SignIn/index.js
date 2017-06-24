import React from 'react';
import { connect } from 'react-redux';
import { session as sessionActions } from '../../../actions';
import { texts } from '../../../constants';

const SignIn = ({dispatch}) => {
  let username = '';
  let password = '';

  const onUsernameChange = (event) => {
    username = event.target.value;
  };

  const onPasswordChange = (event) => {
    password = event.target.value;
  };

  const onSignInClick = (event) => { 
    event.preventDefault();
    if (username && password && username.trim() && password.trim()) {
      return dispatch(sessionActions.signIn(username, password));
    }
  }

  return (
    <div>
      <input type="text" onChange={onUsernameChange}/>
      <input type="password" onChange={onPasswordChange}/>
      <button type="button" 
        onClick={ (e) => { 
          const result = onSignInClick(e);
          if (!result) {
            password = '';
          }
        }}>
        { texts.signIn }
      </button>
    </div>
  );
};

export default connect()(SignIn);
