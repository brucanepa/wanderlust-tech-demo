import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Review from '../Review';
import { texts } from '../../../constants';

const Reviews = ({reviews}) => (
	<View>
		<Text>{texts.reviewsTitle}</Text>
		<Text/>
		<View>
			{reviews.map(review =>
				<Review
					key={review.id}
					{...review}
				/>
			)}
		</View> 
	</View>
);

export default Reviews;

//ToDO: Text is a separator
