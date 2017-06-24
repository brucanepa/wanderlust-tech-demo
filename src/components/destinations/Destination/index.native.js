import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { texts } from '../../../constants';

const Destination = ({id, name, onClick, selected, index, onClickRemove}) => (
  <View 
    onPress={ () => {onClick(id, index)} } 
    selected={ selected }
    title={(index + 1) + " - " + name }>
    <Button onPress={ () => onClickRemove(id) }
      title={texts.delete} />
  </View>
);

export default Destination;