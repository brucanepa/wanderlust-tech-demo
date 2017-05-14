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
    const destination = {
      placeId: parseInt(ownProps.placeId),
      name: ownProps.name
    }
    return dispatch(destinationsActions.add(destination));
  }
});

AddDestinationContainer = connect(
  null,
  mapDispatchToProps
)(AddDestinationContainer);

export default AddDestinationContainer;
