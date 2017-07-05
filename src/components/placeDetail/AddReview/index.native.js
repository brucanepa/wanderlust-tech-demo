import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Button, TextInput, Alert, Image } from 'react-native';
import { addReviewNative } from '../../../actions/placeDetailNative';
import { texts } from '../../../constants';
import openImagePicker from '../../../utils/nativeImagePicker';
import PlaceRating from '../PlaceRating';

class AddReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dispatch: props.dispatch,
      placeId: props.placeId,
      signedIn: props.signedIn,
      comment: '',
      rating: 1,
      imageSource: null,
      requesting: false
    }
    this.onCommentChange = this.onCommentChange.bind(this);
    this.onAddCommentPress = this.onAddCommentPress.bind(this);
    this.onRateClick = this.onRateClick.bind(this);
    this.onAddImagePress = this.onAddImagePress.bind(this);
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
    if (!this.state.comment.trim() || this.state.rating < 1 || this.state.requesting) {
      return;
    }
    this.setState({requesting: true});
    const result = this.state.dispatch(addReviewNative({
      placeId: this.state.placeId,
      comment: this.state.comment,
      rating: this.state.rating
    }, this.state.imageSource));
    if (result) {
      result.then(() => {
        this.setState({
          comment: '',
          imageSource: null,
          requesting: false
        })
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
  onAddImagePress = () => {
    try {
      openImagePicker()
        .then(imageSource => {
          if (imageSource) {
            this.setState({
              imageSource
            })
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return this.state.signedIn &&
      <View>
        <Text style={ styles.title }>
          { texts.reviewsComment }
        </Text>
        <TextInput multiline={ true } numberOfLines={ 4 } style={ styles.input } onChangeText={ this.onCommentChange } placeholder={ texts.comment } disabled={this.state.requesting}
          value={ this.state.comment } />
        <View style={ styles.reviewContainer }>
          <View style={ styles.addImageContainer }>
            <View style={ styles.addImage }>
              <Button color="#1e7f7e" title={ this.state.imageSource ? texts.changeImage : texts.addImage } onPress={ this.onAddImagePress } disabled={this.state.requesting}/>
            </View>
            { this.state.imageSource && <Image source={ this.state.imageSource } style={ styles.image } /> }
          </View>
          <PlaceRating onRateClick={ this.onRateClick } />
        </View>
        <Button color="#1e7f7e" title={ this.state.requesting ? texts.loading : texts.newComment } onPress={ this.onAddCommentPress } />
      </View>
  }
}

export default connect()(AddReview);

const styles = StyleSheet.create({
  reviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '3%',
    marginHorizontal: '2%'
  },
  title: {
    fontSize: 20,
    marginTop: '3%',
    marginLeft: '5%'
  },
  input: {
    fontSize: 20,
    marginLeft: '1%',
    marginBottom: '2%',
    backgroundColor: '#ffff'
  },
  addImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '55%'
  },
  addImage: {
    alignSelf: 'flex-start',
    marginTop: '10%',
    marginLeft: '1%',
    width: '50%'
  },
  image: {
    alignSelf: 'flex-end',
    width: 75,
    height: 75
  }
})