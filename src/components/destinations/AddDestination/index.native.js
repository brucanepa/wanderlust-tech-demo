import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { texts } from '../../../constants';

const AddDestination = ({onClick}) => (
  <View>
    <Button onPress={ onClick }
      title={texts.add}
    />
  </View>
);

export default AddDestination;
