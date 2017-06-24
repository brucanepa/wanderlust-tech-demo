import React from 'react';
import { StyleSheet, View } from 'react-native';
import { texts } from '../../../constants';

const Destinations = ({ destinations }) => {
  if (destinations && destinations.length > 0) {
    return (
     <View>
      {destinations.map((destination, index) =>
        <View
          key={destination.id}
          {...destination}
          index={index}
        />)
      } 
      </View>
    )
  }
  return(
    <NoDestinationStylized>{texts.noDestinations}</NoDestinationStylized>
  )
}

export default Destinations;