import React, { PropTypes } from 'react';
import DestinationContainer from './DestinationContainer';

const Destinations = ({ destinations, onClick }) => (
  <ul>
    {destinations.map(destination =>
      <DestinationContainer
        key={destination.id}
        {...destination}
      />
    )}
  </ul>
);

Destinations.propTypes = {
  destinations: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    placeId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired
};

export default Destinations;
