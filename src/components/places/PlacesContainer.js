import React, { Component } from 'react';
import { connect } from 'react-redux';
import { places as placesActions } from '../../actions';
import Places from './Places';
import { getVisiblePlaces } from '../../reducers';

class VisiblePlaces extends Component {
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    const {regionId} = this.props.match.params;
    this.props.fetchPlaces(regionId);
  }
  render() {
    return <Places {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  places: getVisiblePlaces(state),
  region: 'Test'
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlaces(regionId) {
    return dispatch(placesActions.fetchPlaces(regionId));
  }
});

VisiblePlaces = connect(
  mapStateToProps,
  mapDispatchToProps
)(VisiblePlaces);

export default VisiblePlaces;
