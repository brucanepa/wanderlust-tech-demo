import React, { PropTypes } from 'react';
import Review from './Review';
import styled from 'styled-components';

const Reviews = ({reviews}) => (
	<PlaceReviewsStylized>
		<h1>Opiniones</h1>
		<Separator></Separator>
		<ul>
			{reviews.map(review =>
				<Review
					key={review.id}
					{...review}
				/>
			)}
		</ul> 
	</PlaceReviewsStylized>
);

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
		comment: PropTypes.string.isRequired,
		rating: PropTypes.number.isRequired
  })).isRequired
};

const PlaceReviewsStylized = styled.div`
	margin: 2%;
`;

const Separator = styled.hr`
	border: 0;
    border-top: 2px solid #1e7f7e;
`;
