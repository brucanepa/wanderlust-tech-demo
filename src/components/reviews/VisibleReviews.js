import React, { Component } from 'react';
import { connect } from 'react-redux';
import Reviews from './Reviews';
import AddReview from './AddReview';
import { getPlaceReviews } from '../../reducers';
import { placeDetail as placeDetailActions } from '../../actions';

class VisibleReviews extends Component {
  render() {
    return <div>
            <Reviews {...this.props}/>
            <AddReview placeId={ this.props.placeId }/>
        </div>
  }
}

const mapStateToProps = (state) => ({
  reviews: getPlaceReviews(state)
});

VisibleReviews = connect(
  mapStateToProps,
  null
)(VisibleReviews);

export default VisibleReviews;
