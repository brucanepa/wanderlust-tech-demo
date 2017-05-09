import React, { Component } from 'react';
import { connect } from 'react-redux';
import { destinations as destinationsActions } from '../../actions';
import AddDestination from './AddDestination';

class AddDestinationContainer extends Component {
  render() {
    return <AddDestination {...this.props} />
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      return dispatch(destinationsActions.add(parseInt(ownProps.id)));
    }
  };
};

AddDestinationContainer = connect(
  null,
  mapDispatchToProps
)(AddDestinationContainer);

export default AddDestinationContainer;
