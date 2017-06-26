import React from 'react';
import { StyleSheet, View } from 'react-native';
import DestinationContainer from '../../../containers/DestinationContainer';
import { texts } from '../../../constants';

const Destinations = ({ destinations }) => {
  if (destinations && destinations.length > 0) {
    return (
      <View>
        {destinations.map((destination, index) =>
          <DestinationContainer
            key={destination.id}
            {...destination}
            index={index}
          />)
        } 
      </View>
    )
  }
  return(
    <Text>{texts.noDestinations}</Text>
  )
}

export default Destinations;