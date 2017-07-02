import React from 'react';
import { StyleSheet, ScrollView, View, Text, Button, Image } from 'react-native';
import { defaultImage } from '../../../constants';
import Place from '../Place';
import container from '../../../containers/PlacesContainer';

const Places = ({places, regionName, regionImage, navigation}) => (
  <ScrollView>
    <Image source={ { uri: regionImage } } />
    <Text style= {styles.title}>
      { regionName }
    </Text>
    { places && places.map(place => 
    	<Place key={ place.id } {...place} navigation={ navigation } />) 
	}
  </ScrollView>
);

export default container(Places);

const styles = StyleSheet.create({
  container:{ 
    height: '85%'
  },
  title: { 
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: '5%'
  }
})
