import React, { Component } from 'react';
import { connect } from 'react-redux';
import { destinations as destinationsActions } from '../../actions';
import Destinations from './Destinations';
import { getDestinations } from '../../reducers';

class DestinationsContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    this.props.fetchDestinations();
  }
  render() {
    return <Destinations {...this.props} />
  }
}

const mapStateToProps = (state) => ({
    destinations: getDestinations(state)
});

const mapDispatchToProps = (dispatch) => ({
    fetchDestinations() {
      return dispatch(destinationsActions.fetchDestinations());
    }
});

DestinationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DestinationsContainer);

export default DestinationsContainer;
