import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Image } from 'react-native';
import { defaultImage } from '../../../constants';
import AddDestination from '../../destinations/AddDestination';

const onPress = (id, navigation) => {
  navigation.navigate('PlaceDetail', {
    placeId: id
  })
};

const Place = ({id, name, image, navigation}) => (
  <View>
    <TouchableHighlight onPress={ () => onPress(id, navigation) }>
      <Image style={ styles.image } source={ { uri: image } } />
    </TouchableHighlight>
    <Text>
      { name }
    </Text>
    <AddDestination placeId={ id } name={ name } />
  </View>
);

export default Place;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50
  }
})