import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlaceActivities from './PlaceActivities';
import { getPlaceActivities } from '../../reducers';

class PlaceActivitiesContainer extends Component {
  render() {
    return <PlaceActivities {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  activities: getPlaceActivities(state)
});

PlaceActivitiesContainer = connect(
  mapStateToProps,
  null
)(PlaceActivitiesContainer);

export default PlaceActivitiesContainer;
