import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Button, TextInput, Alert, Image } from 'react-native';
import { placeDetail as placeDetailActions } from '../../../actions';
import { texts } from '../../../constants';
import showImagePicker from '../../../utils/nativeImagePicker';
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
      imageSource: null
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
    showImagePicker()
      .then(imageSource => {
        if (imageSource) {
          this.setState({
            imageSource: { uri: imageSource.uri }
          })
        }
      });
  };
  render() {
    return this.state.signedIn &&
      <View>
        <Text style={styles.title}>
          { texts.reviewsComment }
        </Text>
        <TextInput multiline = {true} numberOfLines = {4} style={ styles.input } onChangeText={ this.onCommentChange } placeholder={ texts.comment } value={ this.state.comment } />
        <View style={styles.reviewContainer}>
          {this.state.imageSource && <Image source={this.state.imageSource} style={styles.image}/>}
          <View style={styles.addImage}>
            <Button color="#1e7f7e" title={ this.state.imageSource ? texts.changeImage : texts.addImage } onPress={ this.onAddPhotoPress } />
          </View>
          <PlaceRating onRateClick={ this.onRateClick } />
         </View>
        <Button color="#1e7f7e" title={ texts.newComment } onPress={ this.onAddCommentPress } />
      </View>
  }
}

export default connect()(AddReview);

const styles = StyleSheet.create({
  reviewContainer:{
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
  addImage: {
    marginTop: '7%',
    marginLeft: '1%',
    width: '27%'
  },
  image: {
    width: 50,
    height: 50
  }
})