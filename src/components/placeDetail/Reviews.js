import React, { PropTypes } from 'react';
import Review from './Review';

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

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
		comment: PropTypes.string.isRequired,
		rating: PropTypes.number.isRequired
  })).isRequired
};