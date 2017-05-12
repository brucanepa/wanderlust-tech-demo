import React, { Component } from 'react';
import { connect } from 'react-redux';
import { placeDetail as placeDetailActions } from '../../actions';
import AddReview from './AddReview';

class AddReviewContainer extends Component {
  render() {
    return <AddReview {...this.props} />
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addReview(comment, rate) {
    return dispatch(placeDetailActions.addReview(ownProps.placeId, comment, rate));
  }
});

AddReviewContainer = connect(
  null,
  mapDispatchToProps
)(AddReviewContainer);

export default AddReviewContainer;
