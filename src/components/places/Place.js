import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import AddDestinationContainer from '../destinations/AddDestinationContainer';

const Place = ({id, name, match}) => (
	<li>
   <Link to={ `/places/${id}` }> 
    Place: { name }
   </Link>
   <AddDestinationContainer placeId={ id } />
 </li>
);

export default Place;

Place.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	match: PropTypes.any
};