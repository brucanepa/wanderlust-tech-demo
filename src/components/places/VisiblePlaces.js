import React, { Component } from 'react';
import { connect } from 'react-redux';
import { places as placesActions } from '../../actions';
import Places from './Places';
import { getVisiblePlaces } from '../../reducers';

class VisiblePlaces extends Component {
  componentDidMount() {
    this.fetchData();
  }
  /*componentDidUpdate(prevProps, prevState) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }*/
  fetchData() {
    const {filter} = this.props;
    this.props.fetchPlaces(filter);
  }
  render() {
    return <Places {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  places: getVisiblePlaces(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlaces(filter) {
    return dispatch(placesActions.fetchPlaces(filter));
  }
});

VisiblePlaces = connect(
  mapStateToProps,
  mapDispatchToProps
)(VisiblePlaces);

export default VisiblePlaces;
