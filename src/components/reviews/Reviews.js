import React from 'react';
import Review from './Review';
import AddReview from './AddReview';

const Reviews = (reviews = []) => (
	<div>
		<ul>
				{reviews.map(review =>
					<Review
						key={review.id}
						{...review}
					/>
        )}
      </ul> 
   <AddReview />
 </div>
);

export default Reviews;