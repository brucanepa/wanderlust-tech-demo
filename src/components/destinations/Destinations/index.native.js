import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { texts } from '../../../constants';
import Destination from '../Destination';
import container from '../../../containers/DestinationsContainer';

const Destinations = ({ destinations }) => {
  if (destinations && destinations.length > 0) {
    return (
      <View style={ styles.containerScrollView }>
        {destinations.map((destination, index) =>
          <Destination
            key={destination.id}
            {...destination}
            index={index}
          />)
        } 
      </View>
    )
  }
  return(
    <Text style={ styles.noDestinations }>{texts.noDestinations}</Text>
  )
};

export default container(Destinations);


const styles = StyleSheet.create({
  containerScrollView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#1e7f7e'
  },
  noDestinations: {
    textAlign: 'center'
  }
})
