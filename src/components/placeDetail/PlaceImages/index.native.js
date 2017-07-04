import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { defaultImage } from '../../../constants';

const PlaceImages = ({images}) => (
	<View>
		{
		  images && images.map(image => 
		    <Image style={styles.image} key={image} source={ {uri: image} } />
		  )
		}
	</View>
);

export default PlaceImages;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 100
  }
})