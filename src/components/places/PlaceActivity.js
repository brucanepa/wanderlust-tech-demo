import React, { PropTypes } from 'react';

const PlaceActivity = ({name, description}) => (
  <li>
    Activity: {name} 
    Description: {description}
  </li>
);

export default PlaceActivity;

PlaceActivity.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};