import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { defaultImage } from '../../../constants';
import Place from '../Place';
import container from '../../../containers/PlacesContainer';

const Places = ({ places, regionName, regionImage }) => (
  <View>
    <View >
      <Image source={{uri: regionImage}}/>
      <Text>{regionName}</Text>
      {/*<Back to={`/continents`}>
          arrow_back
      </Back>*/}
    </View>
    <View>
      {places.map(place =>
        <Place
            key={place.id}
            {...place}
        />
      )}
    </View> 
  </View>
);

export default container(Places);

//ToDo: navigation