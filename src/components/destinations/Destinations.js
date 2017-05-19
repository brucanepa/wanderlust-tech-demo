import React, { PropTypes } from 'react';
import DestinationContainer from './DestinationContainer';
import styled from 'styled-components';
import { texts } from '../../constants';

const Destinations = ({ destinations }) => {
  if(destinations && destinations.length > 0) {
    return (
     <DestinationsStylized>
      {destinations.map((destination, index) =>
        <DestinationContainer
          key={destination.id}
          {...destination}
          index={index}
        />)
      } 
      </DestinationsStylized>
    )
  }
  return(
    <NoDestinationStylized>{texts.noDestinations}</NoDestinationStylized>
  )
}
 

Destinations.propTypes = {
  destinations: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    placeId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired
};

const DestinationsStylized = styled.ul`
  list-style-type: none;
  padding: 0;
  transition: 0.8s;
`;

const NoDestinationStylized = styled.div`
    text-align: center;
    width: 100%;
    font-size: 1.4em;
    border-color: white;
    border-width: 2px;
    color: white;
    margin-top: 20px;
`;

export default Destinations;

