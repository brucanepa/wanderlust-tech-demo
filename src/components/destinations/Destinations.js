import React, { PropTypes } from 'react';
import DestinationContainer from './DestinationContainer';
import styled from 'styled-components';

const Destinations = ({ destinations, onClick }) => (
  <ListStylized>
    {destinations.map(destination =>
      <DestinationContainer
        key={destination.id}
        {...destination}
      />
    )}
  </ListStylized>
);

Destinations.propTypes = {
  destinations: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    placeId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired
};

const ListStylized = styled.ul`
  list-style-type: none,
  padding: 0px
  transition: 0.3s;
`;

export default Destinations;

