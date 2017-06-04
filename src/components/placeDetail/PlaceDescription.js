import React from 'react';
import styled from 'styled-components';
import { texts } from '../../constants';

const PlaceDescription = ({ description }) => (
  <PlaceDescriptionStylized>
		<h1>{texts.descriptionTitle}</h1>
		<Separator/>
		<Description>{description}</Description>
	</PlaceDescriptionStylized>
);

export default PlaceDescription;

const PlaceDescriptionStylized = styled.div`
	margin: 2%;
`;

const Description = styled.p`
	font-size: 1.4em;
`;

const Separator = styled.hr`
	  border: 0;
    border-top: 2px solid #1e7f7e;
`;
