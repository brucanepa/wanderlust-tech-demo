import React from 'react';
import { Link } from 'react-router-dom';
import PlacesContainer from '../places/PlacesContainer';

const Region = ({ match, id, name }) => (
	<li>
    <Link to={`regions/${id}`}>
      Region: {name}
    </Link>
	</li>
);

export default Region;
