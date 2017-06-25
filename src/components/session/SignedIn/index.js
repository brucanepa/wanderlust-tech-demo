import React from 'react';
import styled from 'styled-components';
import { texts } from '../../../constants';

const SignedIn = ({onSignOutClick, name}) => (
  <div>
    <Button type="button" onClick={ (e) => onSignOutClick(e) }>
      {texts.signOut}
    </Button>
  </div>
);

export default SignedIn;

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
    margin-bottom: 5%;
    &:hover {
        background-color: #2aaba9;
        color: white;
    }
`;