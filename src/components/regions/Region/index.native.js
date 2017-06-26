import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { getRegionTitle } from '../../../utils/textHelper';
import { defaultImage } from '../../../constants';

const Region = ({id, name, image, placesCount}) => (
  // <Link to={ `regions/${id}` }>
  <View>
    <View>
      <Image source={ image || defaultImage } />
      <Text>
        { getRegionTitle(name, placesCount) }
      </Text>
    </View>
  </View>
  // </Link>
);

export default Region;

//ToDo: navigation