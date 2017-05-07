import React, { PropTypes } from 'react';
import { Route, Link } from 'react-router-dom';
import Place from './Place';

const Places = ({ places, match }) => (
  <div>
	    <h2>Places</h2>
	    <ul>
	        {places.map(place =>
		      <Place
		        key={place.id}
		        {...place}
		        match={match}
		      />
		    )}
   		</ul>	
   	</div>
);

Places.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  match: PropTypes.any
};

export default Places;
