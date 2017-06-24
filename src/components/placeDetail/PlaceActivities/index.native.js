import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PlaceActivity from '../PlaceActivity'
import { texts } from '../../../constants';

const PlaceActivities = ({ activities }) => (
  <View>
    <Text>{texts.activitiesTitle}</Text>
    <Text/>
    <View>
      { activities.map(activitiy => 
     	  <PlaceActivity 
     		key={activitiy.id} 
     		{...activitiy}/>
     	)
     }
    </View>
  </View>
);

export default PlaceActivities;