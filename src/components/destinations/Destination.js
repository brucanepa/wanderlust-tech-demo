import React, { PropTypes } from 'react';

const Destination = ({ id, name, onClick, selected }) => (
  <li style={{
      color: selected ? 'red' : 'white',
    }}
    onClick={() => {onClick(id)} }>
    {name}
  </li>
);

Destination.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired
};

export default Destination;
