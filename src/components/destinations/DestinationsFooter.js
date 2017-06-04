import React from 'react';
import styled from 'styled-components';

const DestinationsFooter = ({onClickUp, onClickDown, selectedInfo}) => (
    <Footer>
      <Button type="button" onClick={ () => onClickUp(selectedInfo) }>arrow_upward</Button>
      <Button type="button" onClick={ () => onClickDown(selectedInfo) }>arrow_downward</Button>
    </Footer>
);

export default DestinationsFooter;

const Button = styled.button`
	height: 45px;
    width: 45px;
    margin: 1%;
    font-size: 31px;
    color: #1e7f7e;
    background-color: white;
    border-radius: 50%;
    border: none;
    outline:none;
    font-family: Material Icons;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    margin: 20px 20px;
    transition: 0.8s;
    &:hover {
        background-color: #2aaba9;
        color: white;
    }
`

const Footer = styled.div`
    text-align: center;
`