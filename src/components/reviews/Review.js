import React from 'react';

const Review = ({ id, comment, rate }) => (
	<li>
    	{comment} {rate}
	</li>
);

export default Review;
