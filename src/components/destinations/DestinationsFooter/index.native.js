import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { texts } from '../../../constants';
import container from '../../../containers/DestinationsFooterContainer';

const DestinationsFooter = ({onClickUp, onClickDown, selectedInfo}) => (
  <View>
    <Button onPress={ () => onClickUp(selectedInfo) } title={ texts.up } />
    <Button onPress={ () => onClickDown(selectedInfo) } title={ texts.down } />
  </View>
);

export default container(DestinationsFooter);
