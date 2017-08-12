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
  <TouchableHighlight onPress={ () => onPress(id, navigation) }>
    <Image style={ styles.image } source={ { uri: image } }>
     <Text style= {styles.title}>
        { getRegionTitle(name, placesCount) }
    </Text>
    </Image>
  </TouchableHighlight>
);

export default Region;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 100,
    marginTop: '1%',
    flexDirection: 'row-reverse'
  },
  title: { 
    alignSelf: 'flex-end',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor : 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10
  }
})