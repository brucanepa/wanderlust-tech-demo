import React from 'react';
import { Link } from 'react-router-dom';
import AddToVisit from './AddToVisit';

const Place = ({ match }) => (
	<li>
	    <Link to={`${match.url}/placeNumberOne`}>
		    Hey look at this place
		</Link>
		<AddToVisit/>
	</li>
);

export default Place;
