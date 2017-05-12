import React from 'react';
import { Link } from 'react-router-dom';
import AddDestinationContainer from '../destinations/AddDestinationContainer';

const Place = ({ match, id, name }) => (
	<li>
	    <Link to={`/places/${id}`}>
		    Place: {name}
		</Link>
		<AddDestinationContainer placeId={id}/>
	</li>
);

export default Place;
