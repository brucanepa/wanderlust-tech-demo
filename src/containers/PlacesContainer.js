import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { places as placesActions } from '../actions';
import { getVisiblePlaces, getPlacesRegionName, getRegionImageById } from '../reducers';
import NotFound from '../components/NotFound';

const getRegionId = (props) => {
  return props.match ? props.match.params.regionId : props.navigation.state.params.regionId;
}

const container = T => class PlacesContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }
  getRegionId() {
    return this.props.match ? this.props.match.params : this.props.navigation.state.params.regionId;
  }
  fetchData() {
    const regionId = getRegionId(this.props);
    this.props.fetchPlaces(regionId);
  }
  show() {
    return !!this.props.regionName;
  }
  render() {
    return this.show() ? <T {...this.props} /> : <NotFound />
  }
}

const mapStateToProps = (state, ownProps) => ({
  places: getVisiblePlaces(state),
  regionName: getPlacesRegionName(state),
  regionImage: getRegionImageById(state, getRegionId(ownProps))
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlaces(regionId) {
    return dispatch(placesActions.fetchPlaces(regionId));
  }
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  container
);
