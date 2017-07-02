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
  <View style={styles.container}>
    <TouchableHighlight onPress={ () => onPress(id, navigation) }>
      <Image style={styles.image} source={ { uri: image } }>
        <Text style={styles.title}>{name}</Text>
      </Image>
    </TouchableHighlight>
    <AddDestination placeId={ id } name={ name } />
  </View>
);

export default Place;

const styles = StyleSheet.create({
  container: { 
    marginBottom: '1%'
  },
  image: {
    width: '100%',
    height: 100
  },
  title: { 
    alignSelf: 'flex-end',
    marginRight: '2%',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor : 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
    marginTop: '20%'
  }
})