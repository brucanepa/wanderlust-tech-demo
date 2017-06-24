import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Place from '../Place';
import { defaultImage } from '../../../constants';

const Places = ({ places, regionName, regionImage }) => (
  <View>
    <View >
      <Image source={regionImage || defaultImage}/>
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

export default Places;

//ToDo: navigation