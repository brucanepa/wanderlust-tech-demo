import React from 'react';
import styled from 'styled-components';
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
      <StepInfo>{texts.username}</StepInfo>
      <InputStylized type="text" onChange={onUsernameChange}/>
      <StepInfo>{texts.password}</StepInfo>
      <InputStylized type="password" onChange={onPasswordChange}/>
      <Button type="button" 
        onClick={ (e) => { 
          const result = onSignInClick(e);
          if (!result) {
            password = '';
          }
        }}>
        { texts.signIn }
      </Button>
    </div>
  );
};

export default connect()(SignIn);

const StepInfo = styled.label`
  color:white;
  margin-left: 12%;
`
const InputStylized = styled.input`
    font-size: 1.2em;
    padding: 1% 2%;
    width: 70%;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    border-radius: 5px;
    outline: none;
    margin-bottom: 2%;
    margin-left: 12%;
`;

const Button = styled.button`
    float: right;
    width: 100%;
    padding: 2%;
    font-size: 1.4em;
    text-align: center;
    border: none;
    outline: none;
    color: #1e7f7e;
    background-color: white;
    transition: 0.8s;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    margin-top: 5%;
    &:hover {
        background-color: #2aaba9;
        color: white;
    }
`;