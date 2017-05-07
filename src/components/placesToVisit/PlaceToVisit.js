import React, { PropTypes } from 'react';

const ToVisit = ({ onClick, name }) => (
  <li
    onClick={onClick}
  >
    {name}
  </li>
);

ToVisit.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default ToVisit;
