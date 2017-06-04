import React from 'react';
import styled from 'styled-components';

const Destination = ({id, name, onClick, selected, index, onClickRemove}) => (
  <DestinationStylized 
    onClick={ () => {onClick(id, index)} } 
    selected={ selected }>
    {index + 1 } - { " "}
    { name }
    <Button type="button" onClick={ () => onClickRemove(id) }>delete</Button>
  </DestinationStylized>
);

const DestinationStylized = styled.li`
    padding-top: 15px;
    font-size: 20px;
    background-color: ${({ selected }) => selected ? 'white' : '#5f9ea0'};
    transition: 0.3s;
    text-align: center;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    margin: 4px 0px;
    color: ${({ selected }) => selected ? '#1e7f7e' : 'white'};
    display: table;
    width: 100%;
    box-sizing: border-box;
    &:hover { 
        background-color: #2aaba9;
        margin-bottom: 15px;
        color: white;
    }
`;

const Button = styled.button`
    height: 34px;
    float: right;
    margin: -4px 12px;
    margin-bottom: 11px;
    padding-right: 5px;
    font-size: 24px;
    border-radius: 50%;
    border: none;
    outline: none;
    font-family: Material Icons;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    color: #1e7f7e;
    background-color: white;
    transition: 0.8s;
    &:hover {
        background-color: #1e7f7e;
        color: white;
    }
`

export default Destination;



