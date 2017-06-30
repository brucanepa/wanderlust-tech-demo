import React from 'react';
import { StyleSheet, ScrollView, View, Text, Button, Image } from 'react-native';
import { defaultImage } from '../../../constants';
import Place from '../Place';
import container from '../../../containers/PlacesContainer';

const Places = ({places, regionName, regionImage, navigation}) => (
  <ScrollView>
    <Image source={ { uri: regionImage } } />
    <Text>
      { regionName }
    </Text>
    <View>
      { places && places.map(place => <Place key={ place.id } {...place} navigation={ navigation } />) }
    </View>
  </ScrollView>
);

export default container(Places);
