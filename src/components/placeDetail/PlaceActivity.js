import React, { PropTypes } from 'react';

const PlaceActivity = ({name, description, price}) => (
  <li>
    Activity: {name} 
    Description: {description}
    Price: {price}
  </li>
);

export default PlaceActivity;

PlaceActivity.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};