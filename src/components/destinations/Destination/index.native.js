import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { texts } from '../../../constants';
import container from '../../../containers/DestinationContainer';

const Destination = ({id, name, onClick, selected, index, onClickRemove}) => (
  <View style = {styles.containerScrollView} >
  	<View style = {styles.destination} >
	    <Button color={selected ? '#2aaba9' : '#1e7f7e'}
	      onPress={ () => {onClick(id, index)} } 
	      selected={ selected }
	      title={(index + 1) + " - " + name }/>
	</View>
    <View style = {styles.remove} >
	    <Button color= 'red'
	    overrides={styles.remove}
	      onPress={ () => onClickRemove(id) }
	      title={texts.delete}/>
    </View>
  </View>
);

export default container(Destination);

const styles = StyleSheet.create({
  containerScrollView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  destination: { 
  	width:'80%',
  	marginTop: '0.5%'
  },
  remove: {
  	flexGrow: 1,
  	marginTop: '0.5%'
  }
})
