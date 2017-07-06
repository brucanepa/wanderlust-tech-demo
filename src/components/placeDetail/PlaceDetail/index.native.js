import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import { texts, defaultImage } from '../../../constants';
import AddDestination from '../../destinations/AddDestination'
import PlaceDescription from '../PlaceDescription';
import PlaceActivities from '../PlaceActivities';
import PlaceImages from '../PlaceImages';
import PlaceRating from '../PlaceRating';
import AddReview from '../../placeDetail/AddReview';
import Reviews from '../../placeDetail/Reviews';
import container from '../../../containers/PlaceDetailContainer';

const PlaceDetail = ({placeDetail, regionId, images, signedIn, navigation}) => (
  <View style={styles.container}>
    <ScrollView>
      <Image style={styles.image} source={ { uri: images && images[0] } }>
        <Text style={styles.title}>
          { placeDetail.placeInformation.name }
        </Text>
        <Text style={styles.rating}>
          { placeDetail.placeRating.rating }
        </Text>
      </Image>
      <View>
        <AddDestination placeId={ navigation.state.params.placeId } name={ placeDetail.placeInformation.name } />
        { !signedIn && <Text style={styles.signInToAdd}> { texts.signInToAddDestination } </Text> }
      </View>
      <PlaceDescription description={ placeDetail.placeInformation.description } />
      <PlaceActivities activities={ placeDetail.placeInformation.activities } />
      <PlaceImages images={ images } />
      <Reviews reviews={ placeDetail.reviewList } />
      <AddReview placeId={ navigation.state.params.placeId } signedIn={ signedIn } />
    </ScrollView>
  </View>
);

export default container(PlaceDetail);

const styles = StyleSheet.create({
  container: { 
    backgroundColor: 'aliceblue'
  },
  image: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: { 
    alignSelf: 'flex-end',
    marginLeft: '2%',
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor : 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
  },
  rating: { 
    alignSelf: 'flex-end',
    marginRight: '2%',
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor : 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10
  },
  signInToAdd: { 
    alignSelf: 'flex-end'
  }
})