import React, { PropTypes } from 'react';
import styled from 'styled-components';

const PlaceActivity = ({name, description, price}) => (
  <li>
  	<h2>{name}</h2>
  	<Description>{description}</Description>
    <Description>Precio: {price}</Description>
    <Subseparator/>
  </li>
);

export default PlaceActivity;

PlaceActivity.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

const Description = styled.p`
	font-size: 1.4em;
`;

const Subseparator = styled.hr`
    border-top: 1px solid #5f9ea0;
`;
