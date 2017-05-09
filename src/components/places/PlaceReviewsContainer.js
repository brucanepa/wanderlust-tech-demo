import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlaceReviews from './PlaceReviews';
import { getVisibleReviews } from '../../reducers';

class PlaceReviewsContainer extends Component {
  render() {
    return <div/> /*<PlaceReviews {...this.props} />*/ //ToDo
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: getVisibleReviews(state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

PlaceReviewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceReviewsContainer);

export default PlaceReviewsContainer;
