import React from 'react';
import { StyleSheet, View, TouchableHighlight, Text, Image } from 'react-native';
import { getRegionTitle } from '../../../utils/textHelper';
import { defaultImage } from '../../../constants';

const onPress = (id, navigation) => {
  navigation.navigate('Places', {
    regionId: id
  })
};

const Region = ({id, name, image, placesCount, navigation}) => (
  <View>
    <Text>
      { getRegionTitle(name, placesCount) }
    </Text>
    <TouchableHighlight onPress={ () => onPress(id, navigation) }>
      <Image style={ styles.image } source={ { uri: image } } />
    </TouchableHighlight>
  </View>
);

export default Region;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50
  }
})