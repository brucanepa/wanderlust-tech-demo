import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AddDestinationContainer from '../../../containers/AddDestinationContainer';
import PlaceDescription from '../PlaceDescription';
import PlaceActivities from '../PlaceActivities';
import PlaceImages from '../PlaceImages';
import PlaceRating from '../PlaceRating';
import AddReview from '../../placeDetail/AddReview';
import Reviews from '../../placeDetail/Reviews';
import { texts, defaultImage } from '../../../constants';

const PlaceDetail = ({placeDetail, regionId, images, signedIn, match}) => (
  <View>
    <View>
      <Image source={ images && images[0] || defaultImage } />
      <Text>
        { placeDetail.placeInformation.name }
      </Text>
      { /*<Back to={regionId ? `/regions/${regionId}` : '/continents'}>
            arrow_back
        </Back>*/ }
      <View>
        <PlaceRating {...placeDetail.placeRating} rating={ 1 } total={ 1 } />
        <Text>
          { placeDetail.placeRating.rating } 
        </Text>
      </View>
    </View>
    <View>
      <View>
        <AddDestinationContainer placeId={ match.params.placeId } name={ placeDetail.placeInformation.name } />
        {signedIn ? texts.addAsDestiantion : texts.signInToAddDestination}
      </View>
      <PlaceDescription description={ placeDetail.placeInformation.description } />
      <PlaceActivities activities={ placeDetail.placeInformation.activities } />
      <Reviews reviews={ placeDetail.reviewList } />
      <AddReview placeId={ match.params.placeId } signedIn={ signedIn } />
    </View>
    <View>
      <PlaceImages images={ images } />
    </View>
  </View>
);

export default PlaceDetail;

//ToDo: implement router