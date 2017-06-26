import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { texts } from '../../../constants';
import Destination from '../Destination';
import container from '../../../containers/DestinationsContainer';

const Destinations = ({ destinations }) => {
  if (destinations && destinations.length > 0) {
    return (
      <View>
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
    <View>
      <Text>{texts.noDestinations}</Text>
    </View>
  )
};

export default container(Destinations);