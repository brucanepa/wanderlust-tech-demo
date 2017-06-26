import React from 'react';
import styled from 'styled-components';
import { texts } from '../../../constants';
import Destination from '../Destination';
import container from '../../../containers/DestinationsContainer';

const Destinations = ({ destinations }) => {
  if(destinations && destinations.length > 0) {
    return (
     <DestinationsStylized>
      {destinations.map((destination, index) =>
        <Destination
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
 
export default container(Destinations);

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


