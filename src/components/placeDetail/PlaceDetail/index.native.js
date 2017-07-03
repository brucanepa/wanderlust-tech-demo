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
  <ScrollView>
    <View>
      <Image style={ styles.image } source={ { uri: images && images[0] } } />
      <Text>
        { placeDetail.placeInformation.name }
      </Text>
      <View>
        <Text>
          { placeDetail.placeRating.rating }
        </Text>
      </View>
    </View>
    <View>
      <View>
        <AddDestination placeId={ navigation.state.params.placeId } name={ placeDetail.placeInformation.name } />
        <Text>
          { signedIn ? texts.addAsDestiantion : texts.signInToAddDestination }
        </Text>
      </View>
      <PlaceDescription description={ placeDetail.placeInformation.description } />
      <PlaceActivities activities={ placeDetail.placeInformation.activities } />
      <Reviews reviews={ placeDetail.reviewList } />
      <AddReview placeId={ navigation.state.params.placeId } signedIn={ signedIn } />
    </View>
    <View>
      <PlaceImages images={ images } />
    </View>
  </ScrollView>
);

export default container(PlaceDetail);

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50
  }
})