import React from 'react';
import PlaceReview from './PlaceReview';
import AddReviewToPlace from './AddReviewToPlace';

const PlaceReviews = (reviews = []) => (
	<div>
		<ul>
				{reviews.map(review =>
					<PlaceReview
						key={review.id}
						{...review}
					/>
        )}
      </ul> 
   <AddReviewToPlace />
 </div>
);

export default PlaceReviews;