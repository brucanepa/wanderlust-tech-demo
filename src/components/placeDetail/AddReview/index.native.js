import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { placeDetail as placeDetailActions } from '../../../actions';
import PlaceRating from '../PlaceRating';
import { texts } from '../../../constants';

const AddReview = ({dispatch, placeId, signedIn}) => {
  let comment = '';
  let rating = 0;

  const onCommentChange = (text) => {
    comment = text;
  };

  const onSubmit = (e) => {
    e && e.preventDefault();
    if (!comment.trim() || rating < 1) {
      return;
    }
    dispatch(placeDetailActions.addReview({ placeId, comment, rating }));
    comment = '';
    rating = 0;
  }

  const onRateClick = (ratingSelected) => {
    rating = ratingSelected;
  }

  return signedIn ? (
    <View>
      <Text>
        { texts.reviewsComment }
      </Text>
      <View>
        { /*<PlaceRating onRateClick={ onRateClick } interactive={ true } />*/ }
      </View>
      <TextInput style={styles.input}
        onChangeText={(text) => onCommentChange(text)}
        placeholder={texts.comment}/>
      <Button title={ texts.newComment } onPress={onSubmit}/>
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