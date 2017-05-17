import React, { Component } from 'react';
import { connect } from 'react-redux';
import { destinations as destinationsActions } from '../../actions';
import Destinations from './Destinations';
import { getDestinations } from '../../reducers';
import { messages} from '../../constants';

class DestinationsContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    this.props.fetchDestinations();
  }
  showDestinations() {
    return this.props.destinations && this.props.destinations.length > 0;
  }
  render() {
    return this.showDestinations() ?
      <Destinations {...this.props} /> :
      <label>{messages.noDestinations}</label> //ToDo
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
