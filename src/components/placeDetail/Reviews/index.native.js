import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Review from '../Review';
import { texts } from '../../../constants';

const Reviews = ({reviews}) => (
	<View>
		<Text style={styles.title}>{texts.reviewsTitle}</Text>
		{
			reviews.map(review =>
				<Review key={review.id} {...review}/>
			)
		} 
	</View>
);

export default Reviews;

const styles = StyleSheet.create({
  title: { 
    fontSize: 20,
    textAlign: 'center',
    marginTop: '3%'
  }
})