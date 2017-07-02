import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Button, TextInput, Alert } from 'react-native';
import { placeDetail as placeDetailActions } from '../../../actions';
import PlaceRating from '../PlaceRating';
import { texts } from '../../../constants';

const AddReview = ({dispatch, placeId, signedIn}) => {
  let comment = '';
  let rating = 1;

  const onCommentChange = (text) => {
    comment = text;
  };

  const onAddCommentPress = (e) => {
    e && e.preventDefault();
    if (!comment.trim() || rating < 1) {
      return;
    }
    const result = dispatch(placeDetailActions.addReview({ placeId, comment, rating }));
    if (result) {
      result.then(result => {
        Alert.alert('', texts.added, [{
          text: 'OK',
          onPress: () => console.log('OK Pressed')
        }])
      })
    }
    comment = '';
    rating = 0;
  }

  const onRateClick = (ratingSelected) => {
    rating = ratingSelected;
  }
  
  const onAddPhotoPress = () => {
    
  };

  return signedIn ? (
    <View>
      <Text>
        { texts.reviewsComment }
      </Text>
      <View>
        <PlaceRating onRateClick={ onRateClick } />
      </View>
      <Button title={ texts.addPhoto } onPress={onAddPhotoPress}/>
      <TextInput style={styles.input}
        onChangeText={(text) => onCommentChange(text)}
        placeholder={texts.comment}/>
      <Button title={ texts.newComment } onPress={ () => onAddCommentPress()}/>
    </View>
    ) : <View/>;
};

export default connect()(AddReview);

// ToDo: Place Rating

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 44,
    borderWidth: 0.5,
    borderColor: '#fafafa',
    padding: 8,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: 'white',
  }
})