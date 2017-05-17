import React, { PropTypes } from 'react';
import DestinationContainer from './DestinationContainer';
import styled from 'styled-components';

const Destinations = ({ destinations, onClick }) => (
  <DestinationsStylized>
    {destinations.map((destination, index) =>
      <DestinationContainer
        key={destination.id}
        {...destination}
        index={index}
      />)
    }
  </DestinationsStylized>
);

Destinations.propTypes = {
  destinations: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    placeId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onClick: PropTypes.func
};

const DestinationsStylized = styled.ul`
  list-style-type: none;
  padding: 0px;
  transition: 0.3s;
`;

export default Destinations;

