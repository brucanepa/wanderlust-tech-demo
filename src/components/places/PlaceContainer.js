import React, { Component } from 'react';
import { connect } from 'react-redux';
import { places as placesActions } from '../../actions';
import Places from './Places';
import { getVisiblePlaces } from '../../reducers';

class PlaceContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }
  /*componentDidUpdate(prevProps, prevState) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }*/
  fetchData() {
    const { filter } = this.props;
    this.props.fetchPlaces(filter);
  }
  render() {
    return <Places {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    places: getPlaceContainer(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaces: (filter) => {
      return dispatch(placesActions.fetchPlaces(filter));
    }
  };
};

PlaceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceContainer);

export default PlaceContainer;
