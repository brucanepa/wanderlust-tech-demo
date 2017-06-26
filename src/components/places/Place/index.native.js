import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { defaultImage } from '../../../constants';
import AddDestination from '../../destinations/AddDestination';

const Place = ({id, name, image}) => (
  // <Link to={ `/places/${id}` }>
  <View>
    <View>
      <Image source={ { uri: image } } />
      <Text>
        { name }
      </Text>
      <AddDestination placeId={ id } name={ name } />
    </View>
  </View>
// </Link>
);

export default Place;

//ToDo: navigation