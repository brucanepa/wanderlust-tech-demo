import React from 'react';
import styled from 'styled-components';
import Review from '../Review';
import { texts } from '../../../constants';

const Reviews = ({reviews}) => (
	<PlaceReviewsStylized>
		<h1>{texts.reviewsTitle}</h1>
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

const PlaceReviewsStylized = styled.div`
	margin: 2%;
`;

const Separator = styled.hr`
	border: 0;
    border-top: 2px solid #1e7f7e;
`;
