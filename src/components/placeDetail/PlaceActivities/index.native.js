import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PlaceActivity from '../PlaceActivity'
import { texts } from '../../../constants';

const PlaceActivities = ({ activities }) => (
  <View>
    <Text style={styles.title}>{texts.activitiesTitle}</Text>
    { 
      activities.map(activitiy => 
     	  <PlaceActivity key={activitiy.id} {...activitiy}/>
     	)
    }
  </View>
);

export default PlaceActivities;

const styles = StyleSheet.create({
  title: { 
    fontSize: 20,
    textAlign: 'center',
    marginTop: '3%'
  }
})