import React, { PropTypes } from 'react';
import PlaceToVisitContainer from './PlaceToVisitContainer';

const PlacesToVisit = ({ placesToVisit, onClick }) => (
  <ul>
    {placesToVisit.map(placeToVisit =>
      <PlaceToVisitContainer
        key={placeToVisit.id}
        {...placeToVisit}
        onClick = {() => {onClick(placeToVisit.id)}}
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
