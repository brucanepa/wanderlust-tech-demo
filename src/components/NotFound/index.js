import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { texts, notFoundImage } from '../../constants';

const NotFound = () => (

  <NotFoundStylized> 
	<Back to={'/continents'}>
		home
	</Back>
  	<NotFoundTitle>{texts.placeNotFound}</NotFoundTitle>
    <NotFoundImage></NotFoundImage>
  </NotFoundStylized>
);


const Back = styled(Link)`
    background-color: #1e7f7e;
    border-radius: 50%;
    width: 47px;
    height: 45px;
    padding-top: 15px;
    padding-left: 13px;
    color: white;
    text-decoration: none;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    margin: 1% 2%;
    text-align: left;
    display: block;
    font-family: Material Icons;
    font-size: 35px;
    outline: none;
    transition: 0.8s;
    &:hover {
        background-color: #2aaba9;
    }

`

const NotFoundTitle = styled.h1` 
    text-align: center;
`;

const NotFoundImage = styled.div` {
  box-sizing: border-box;
  height: 500px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-image:url(${notFoundImage});
`

const NotFoundStylized = styled.div`
    box-sizing: border-box;
    float: left;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    background-color: aliceblue;
    color: #757575;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    transition: 0.8s;
    @media only screen and (min-width: 768px) {
        width: 83.33%
    }
`;

export default NotFound;
