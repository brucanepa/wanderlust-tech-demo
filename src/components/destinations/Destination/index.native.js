import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { texts } from '../../../constants';
import container from '../../../containers/DestinationContainer';

const Destination = ({id, name, onClick, selected, index, onClickRemove}) => (
  <View>
    <Button 
      onPress={ () => {onClick(id, index)} } 
      selected={ selected }
      title={(index + 1) + " - " + name }/>
    <Button 
      onPress={ () => onClickRemove(id) }
      title={texts.delete} />
  </View>
);

export default container(Destination);