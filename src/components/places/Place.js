import React from 'react';
import { Link } from 'react-router-dom';
import AddDestinationContainer from './AddDestinationContainer';

const Place = ({ match, id, name }) => (
	<li>
	    <Link to={`${match.url}/${id}`}>
		    Place: {name}
		</Link>
		<AddDestinationContainer id={id}/>
	</li>
);

export default Place;
