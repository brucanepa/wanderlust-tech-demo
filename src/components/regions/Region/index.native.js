import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { getRegionTitle } from '../../../utils/textHelper';
import { defaultImage } from '../../../constants';

const Region = ({id, name, image, placesCount}) => (
  // <Link to={ `regions/${id}` }>
  <View>
    <Image style={ styles.image } source={ { uri: image } } />
    <Text>
      { getRegionTitle(name, placesCount) }
    </Text>
  </View>
// </Link>
);

export default Region;

//ToDo: navigation

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50
  }
})