import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Button, TextInput, Alert } from 'react-native';
import { placeDetail as placeDetailActions } from '../../../actions';
import PlaceRating from '../PlaceRating';
import { texts } from '../../../constants';

class AddReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dispatch: props.dispatch,
      placeId: props.placeId,
      signedIn: props.signedIn,
      comment: '',
      rating: 1
    }
    this.onCommentChange = this.onCommentChange.bind(this);
    this.onAddCommentPress = this.onAddCommentPress.bind(this);
    this.onRateClick = this.onRateClick.bind(this);
    this.onAddPhotoPress = this.onAddPhotoPress.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.signedIn !== nextProps.signedIn) {
      this.setState({
        signedIn: nextProps.signedIn
      })
    }
  }
  onCommentChange = (text) => {
    this.setState({
      comment: text
    })
  };
  onAddCommentPress = (e) => {
    e && e.preventDefault();
    if (!this.state.comment.trim() || this.state.rating < 1) {
      return;
    }
    const result = this.state.dispatch(placeDetailActions.addReview({
      placeId: this.state.placeId,
      comment: this.state.comment,
      rating: this.state.rating
    }));
    this.setState({
      comment: '',
    })
    if (result) {
      result.then(result => {
        Alert.alert('', texts.added, [{
          text: 'OK',
          onPress: () => console.log('OK Pressed')
        }])
      })
    }
  }
  onRateClick = (rating) => {
    this.setState({
      rating
    })
  }
  onAddPhotoPress = () => {

  };
  render() {
    return this.state.signedIn ? (
      <View>
        <Text>
          { texts.reviewsComment }
        </Text>
        <View>
          <PlaceRating onRateClick={ this.onRateClick } />
        </View>
        <Button title={ texts.addPhoto } onPress={ this.onAddPhotoPress } />
        <TextInput style={ styles.input } onChangeText={ this.onCommentChange } placeholder={ texts.comment } value={ this.state.comment } />
        <Button title={ texts.newComment } onPress={ this.onAddCommentPress } />
      </View>
      ) : <View/>;
  }
}
;

export default connect()(AddReview);

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