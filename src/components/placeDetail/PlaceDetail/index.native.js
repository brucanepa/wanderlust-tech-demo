import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { texts, defaultImage } from '../../../constants';
import AddDestination from '../../destinations/AddDestination'
import PlaceDescription from '../PlaceDescription';
import PlaceActivities from '../PlaceActivities';
import PlaceImages from '../PlaceImages';
import PlaceRating from '../PlaceRating';
import AddReview from '../../placeDetail/AddReview';
import Reviews from '../../placeDetail/Reviews';
import container from '../../../containers/PlaceDetailContainer';

const PlaceDetail = ({placeDetail, regionId, images, signedIn, match}) => (
  <View>

    <View>
      <Image style={ styles.image } source={ { uri: images && images[0] } } />
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
        <AddDestination placeId={ match.params.placeId } name={ placeDetail.placeInformation.name } />
        { signedIn ? texts.addAsDestiantion : texts.signInToAddDestination }
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

export default container(PlaceDetail);

//ToDo: implement router

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50
  }
})