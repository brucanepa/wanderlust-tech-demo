import React, { PropTypes } from 'react';
import PlaceToVisit from './PlaceToVisit';

const PlacesToVisit = ({ placesToVisit }) => (
  <ul>
    {placesToVisit.map(toVisit =>
      <PlaceToVisit
        key={toVisit.id}
        {...toVisit}
      />
    )}
  </ul>
);

PlacesToVisit.propTypes = {
  placesToVisit: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    placeId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired
};

export default PlacesToVisit;
