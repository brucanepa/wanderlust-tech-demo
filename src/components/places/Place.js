import React from 'react';
import { Link } from 'react-router-dom';
import AddToVisit from './AddToVisit';

const Place = ({ match, id, name }) => (
	<li>
	    <Link to={`${match.url}/${id}`}>
		    Place: {name}
		</Link>
		<AddToVisit/>
	</li>
);

export default Place;
