import React from 'react';
import { Link } from 'react-router-dom';
import AddToVisitContainer from './AddToVisitContainer';

const Place = ({ match, id, name }) => (
	<li>
	    <Link to={`${match.url}/${id}`}>
		    Place: {name}
		</Link>
		<AddToVisitContainer id={id}/>
	</li>
);

export default Place;
