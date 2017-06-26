import React, { Component } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { destinations as destinationsActions } from '../actions';
import { getDestinations } from '../reducers';

const container = T => class DestinationsContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    this.props.fetchDestinations();
  }
  render() {
    return <T {...this.props}/>
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

export default compose(
  connect(mapStateToProps,mapDispatchToProps), 
  container
);

