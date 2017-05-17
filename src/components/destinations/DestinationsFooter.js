import React, { PropTypes } from 'react';
import styled from 'styled-components';

const DestinationsFooter = ({onClickUp, onClickDown, onClickRemove, selectedInfo}) => (
    <Footer>
        <Button type="button" onClick={ () => onClickUp(selectedInfo) }>arrow_upward</Button>
        <Button type="button" onClick={ () => onClickDown(selectedInfo) }>arrow_downward</Button>
        <Button type="button" onClick={ () => onClickRemove(selectedInfo) }>delete</Button>
    </Footer>
);

export default DestinationsFooter;

const selectedInfoShape = {
    id: PropTypes.string,
    order: PropTypes.number,
    index: PropTypes.number
};

DestinationsFooter.propTypes = {
    onClickUp: PropTypes.func.isRequired,
    onClickDown: PropTypes.func.isRequired,
    onClickRemove: PropTypes.func.isRequired,
    selectedInfo: PropTypes.shape({
        selected: PropTypes.shape(selectedInfoShape),
        selectedUp: PropTypes.shape(selectedInfoShape),
        selectedDown: PropTypes.shape(selectedInfoShape),
    })
};

const Button = styled.button`
	height: 45px;
    width: 45px;
    margin: 1%;
    font-size: 31px;
    color: white;
    background-color: #5f9ea0;
    border-radius: 50%;
    border: none;
    outline:none;
    font-family: Material Icons;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    margin: 20px 20px;

    &:hover {
        background-color: #2aaba9;
    }
`

const Footer = styled.div`
    text-align: center;
`