import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { defaultImage } from '../../../constants';

const PlaceImages = ({images}) => (
	<View>
		{images && images.map(image => 
			<View key={image}>
				<View>
				  <Image source={ image || defaultImage } />
				</View>
			</View> 
		)}
	</View>
);

export default PlaceImages;