import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reviews as reviewsActions } from '../../actions';
import AddReview from './AddReview';

class AddReviewContainer extends Component {
  render() {
    return <AddReview {...this.props} />
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick() {
      return dispatch(reviewsActions.add(ownProps.placeId));
    }
});

AddReviewContainer = connect(
  null,
  mapDispatchToProps
)(AddReviewContainer);

export default AddReviewContainer;
