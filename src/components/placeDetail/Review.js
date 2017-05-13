import React from 'react';
import PlaceRating from './PlaceRating';

const Review = ({ id, comment, rating }) => (
	<li>
    	{comment}
    	<PlaceRating rating={rating}/>
	</li>
);

export default Review;
