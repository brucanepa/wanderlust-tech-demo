import React from 'react';
import { Link } from 'react-router-dom';
import AddPlaceToVisitContainer from './AddPlaceToVisitContainer';

const Place = ({ match, id, name }) => (
	<li>
	    <Link to={`${match.url}/${id}`}>
		    Place: {name}
		</Link>
		<AddPlaceToVisitContainer id={id}/>
	</li>
);

export default Place;
