import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PlaceRating from '../PlaceRating';
import { texts } from '../../../constants';

const Review = ({id, comment, rating}) => (
	<View>
   <Text>{texts.ratingTitle} </Text>
   <PlaceRating rating={ rating } />
   <Text>
     { comment }
   </Text>
   <Text/>
 </View>
);

export default Review;

//ToDo: last Text is a separator