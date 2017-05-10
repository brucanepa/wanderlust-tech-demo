import React, { Component } from 'react';
import { connect } from 'react-redux';
import Reviews from './Reviews';
import { getVisibleReviews } from '../../reducers';

class ReviewsContainer extends Component {
  render() {
    return <div/> /*<Reviews {...this.props} />*/ //ToDo
  }
}

const mapStateToProps = (state) => ({
  reviews: getVisibleReviews(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

ReviewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsContainer);

export default ReviewsContainer;
