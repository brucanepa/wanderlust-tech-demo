import React, { Component } from 'react';
import { connect } from 'react-redux';
import { destinations as destinationsActions } from '../../actions';
import AddDestination from './AddDestination';
import { getNextDestinationPosition } from '../../reducers';


class AddDestinationContainer extends Component {
  render() {
    return <AddDestination {...this.props} />
  }
}

const mapStateToProps = (state) => ({
    nextDestinationPosition: getNextDestinationPosition(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick(order) {
    const destination = {
      placeId: parseInt(ownProps.placeId),
      name: ownProps.name,
      order
    }
    return dispatch(destinationsActions.add(destination));
  }
});

AddDestinationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDestinationContainer);

export default AddDestinationContainer;
