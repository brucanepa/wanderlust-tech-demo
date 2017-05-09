import React, { PropTypes } from 'react';

const Destination = ({ name, onClick, selected }) => (
  <li style={{
      color: selected ? 'red' : 'white',
    }}
    onClick={() => {onClick()} }>
    {name}
  </li>
);

Destination.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired
};

export default Destination;
