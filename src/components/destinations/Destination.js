import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Destination = ({id, name, onClick, selected, index}) => (
  <DestinationStylized 
    onClick={ () => {onClick(id, index)} } 
    selected={ selected }>
    { name }
  </DestinationStylized>
);

Destination.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired
};

const DestinationStylized = styled.li`
	  height: 35px;
	  padding-top: 5px;
    font-size: 20px;
    background-color: ${({ selected }) => selected ? '#21999e' : '#5f9ea0'};
    transition: 0.3s;
    text-align: center;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    margin: 4px 0px;
    color: white;
    &:hover { 
        background-color: #2aaba9;
    }
`;

export default Destination;



