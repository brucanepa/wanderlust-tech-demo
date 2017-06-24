import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DestinationsContainer from '../../../containers/DestinationsContainer';
import DestinationsFooterContainer from '../../../containers/DestinationsFooterContainer';
import { texts } from '../../../constants';

const DestinationsPanel = ({name}) => (
  <View>
  	<Text>
  		{texts.destinationsTitle}
  	</Text>
    <Text>
  		{name}
  	</Text>
    <Text/>
    <DestinationsContainer />
    <DestinationsFooterContainer/>
  </View>
);

export default DestinationsPanel;