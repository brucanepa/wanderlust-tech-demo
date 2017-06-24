import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { texts, notFoundImage } from '../../constants';

const NotFound = () => (
  <View>
    {/*<Back to={'/continents'}>
      home
    </Back>*/}
    <Button title={ 'Inicio' } /> 
    <Text>
      { texts.placeNotFound }
    </Text>
    <Image source={notFoundImage}/>
  </View>
);

export default NotFound;

// ToDo: implement router in button