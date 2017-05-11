import React, { Component } from 'react';
import { connect } from 'react-redux';
import Reviews from './Reviews';
import AddReviewContainer from './AddReviewContainer';
import { getVisibleReviews } from '../../reducers';
import { reviews as reviewsActions } from '../../actions';

class VisibleReviews extends Component {
  render() {
    return <div>
            {/*<Reviews {...this.props}/>
             <AddReviewContainer placeId={ this.props.placeId } />*/}           </div>
  }
}

const mapStateToProps = (state) => ({
  reviews: getVisibleReviews(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPlaces(filter) {
    return dispatch(reviewsActions.fetchReviews(filter));
  }
});

VisibleReviews = connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleReviews);

export default VisibleReviews;
