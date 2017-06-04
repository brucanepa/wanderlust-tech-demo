import React from 'react';
import styled from 'styled-components';
import { texts } from '../../constants';

const PlaceActivity = ({name, description, price}) => (
  <li>
  	<h2>{name}</h2>
  	<Description>{description}</Description>
    <Description>{texts.priceTitle}: {price}</Description>
    <Subseparator/>
  </li>
);

export default PlaceActivity;

const Description = styled.p`
	font-size: 1.4em;
`;

const Subseparator = styled.hr`
    border-top: 1px solid #5f9ea0;
`;
