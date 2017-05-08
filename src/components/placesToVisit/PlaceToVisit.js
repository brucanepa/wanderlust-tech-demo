import React, { PropTypes } from 'react';

const PlaceToVisit = ({ name, onClick, selected }) => (
  <li style={{
      color: selected ? 'red' : 'white',
    }}
    onClick={() => {onClick()} }>
    {name}
  </li>
);

PlaceToVisit.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired
};

export default PlaceToVisit;
