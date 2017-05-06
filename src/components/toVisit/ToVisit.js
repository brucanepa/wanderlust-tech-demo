import React, { PropTypes } from 'react';

const ToVisit = ({ onClick, text }) => (
  <li
    onClick={onClick}
  >
    {text}
  </li>
);

ToVisit.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default ToVisit;
