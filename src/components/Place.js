import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

const Place = ({ match }) => (
	<div>
		Oh place!
		<h3>{match.params.placeId}</h3>
	</div>
);

export default Place;
