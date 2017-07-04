import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PlaceRating from '../PlaceRating';
import { texts } from '../../../constants';

const Review = ({id, comment, rating, image}) => (
  <View style={ styles.container }>
    <Text style={ styles.rating }>
      { texts.ratingTitle } { ': '}
      { rating }
    </Text>
    <Text>
      { comment }
    </Text>
    { image && <Image style={ styles.image } source={ { uri: image } } /> }
  </View>
);

export default Review;

const styles = StyleSheet.create({
  container: {
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '2%',
    borderBottomColor: '#1e7f7e',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  rating: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})