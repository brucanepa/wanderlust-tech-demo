import React, { Component } from 'react';
import { connect } from 'react-redux';
import { placesToVisit as placesActions } from '../../actions';
import PlacesToVisit from './PlacesToVisit';
import { getVisiblePlacesToVisit } from '../../reducers';

class VisiblePlacesToVisit extends Component {
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
    return <PlacesToVisit {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    placesToVisit: getVisiblePlacesToVisit(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaces: (filter) => {
      return dispatch(placesActions.fetchPlaces(filter));
    }
  };
};

VisiblePlacesToVisit = connect(
  mapStateToProps,
  mapDispatchToProps
)(VisiblePlacesToVisit);

export default VisiblePlacesToVisit;
