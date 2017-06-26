import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import AddDestinationContainer from '../../../containers/AddDestinationContainer';
import { defaultImage } from '../../../constants';

const Place = ({id, name, image}) => (
	// <Link to={ `/places/${id}` }>
    <View>
      <View>
        <Image source={{uri: image}}/>
        <Text>{name}</Text>
        <AddDestinationContainer placeId={ id } name={name}/> 
      </View>
    </View>
  // </Link>
);

export default Place;

//ToDo: navigation