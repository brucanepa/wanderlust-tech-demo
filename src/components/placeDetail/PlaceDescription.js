import React, { PropTypes } from 'react';

const PlaceDescription = ({description}) => (
	<div>{description}</div>
);

export default PlaceDescription;

PlaceDescription.propTypes = {
  description: PropTypes.string.isRequired
};