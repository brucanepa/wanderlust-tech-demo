import React, { PropTypes } from 'react';

const PlaceToVisit = ({ name, onClick }) => (
  <li onClick={() => {onClick()} }>
    {name}
  </li>
);

PlaceToVisit.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PlaceToVisit;
