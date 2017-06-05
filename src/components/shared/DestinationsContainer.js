import React, { Component } from 'react';
import { connect } from 'react-redux';
import { destinations as destinationsActions } from '../../actions';
import WebDestinations from '../web/destinations/Destinations';
import { getDestinations } from '../../reducers';

class DestinationsContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    this.props.fetchDestinations();
  }
  render() {
    return <WebDestinations {...this.props}/>
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
