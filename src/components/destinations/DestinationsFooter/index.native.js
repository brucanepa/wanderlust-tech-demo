import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { texts } from '../../../constants';
import container from '../../../containers/DestinationsFooterContainer';

const DestinationsFooter = ({onClickUp, onClickDown, selectedInfo}) => (
  <View  style={ styles.footer }>
    <Button color='#1e7f7e' onPress={ () => onClickUp(selectedInfo) } title={ texts.up } />
    <Button color='#1e7f7e' onPress={ () => onClickDown(selectedInfo) } title={ texts.down } />
  </View>
);

export default container(DestinationsFooter);

const styles = StyleSheet.create({
  footer: {
  	display: 'flex',
  	flexDirection: 'row',
  	alignItems: 'center',
  	justifyContent: 'space-around',
    width: '100%',
    marginTop: '3%'
  }
})
