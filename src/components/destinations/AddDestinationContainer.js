import React, { Component } from 'react';
import { connect } from 'react-redux';
import { destinations as destinationsActions } from '../../actions';
import AddDestination from './AddDestination';

class AddDestinationContainer extends Component {
  render() {
    return <AddDestination {...this.props} />
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick() {
      return dispatch(destinationsActions.add(parseInt(ownProps.placeId)));
    }
});

AddDestinationContainer = connect(
  null,
  mapDispatchToProps
)(AddDestinationContainer);

export default AddDestinationContainer;
