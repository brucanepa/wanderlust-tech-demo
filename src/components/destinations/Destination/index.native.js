import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { texts } from '../../../constants';
import container from '../../../containers/DestinationContainer';

const Destination = ({id, name, onClick, selected, index, onClickRemove}) => (
  <View style = {styles.container} >
  	<View style = {styles.destination} >
	    <Button color={selected ? '#2aaba9' : '#1e7f7e'}
	      onPress={ () => {onClick(id, index)} } 
	      selected={ selected }
	      title={(index + 1) + " - " + name }/>
	  </View>
    <View style = {styles.remove} >
	    <Button color= 'grey'
	    overrides={styles.remove}
	      onPress={ () => onClickRemove(id) }
	      title={texts.delete}/>
    </View>
  </View>
);

export default container(Destination);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'aliceblue'
  },
  destination: { 
    width:'80%',
    flexGrow: 4,
  	marginTop: '0.5%',
    marginLeft: '1%'
  },
  remove: {
    flexGrow: 1,
  	marginTop: '0.5%',
    marginLeft: '2%',
    marginRight: '1%'
  }
})
