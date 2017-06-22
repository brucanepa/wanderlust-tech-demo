import React from 'react';
import styled from 'styled-components';
import DestinationContainer from '../../../containers/DestinationContainer';
import { texts } from '../../../constants';

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

