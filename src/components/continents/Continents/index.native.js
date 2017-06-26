import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Continent from '../Continent';
import { texts } from '../../../constants';
import container from '../../../containers/ContinentsContainer';

const Continents = ({continents}) => (
  <View>
    <Text>
      { texts.pageTitle }
    </Text>
    <View>
      { continents.map(continent => <Continent key={ continent.id } {...continent} />) }
    </View>
  </View>
);

export default container(Continents);
