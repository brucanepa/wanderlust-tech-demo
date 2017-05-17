import React, { PropTypes } from 'react';
import PlaceRating from './PlaceRating';

const Review = ({ id, comment, rating }) => (
	<li>
    	{comment}
    	<PlaceRating rating={rating}/>
	</li>
);

export default Review;

Review.propTypes = {
  id: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired
};
