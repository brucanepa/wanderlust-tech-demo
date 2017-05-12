import React from 'react';
import Review from './Review';
import AddReview from './AddReview';

const Reviews = ({reviews}) => (
  <div>
  		Reviews:
		<ul>
		{reviews.map(review =>
			<Review
				key={review.id}
				{...review}
			/>
        )}
      </ul> 
 </div>
);

export default Reviews;
