import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddDestination from '../components/destinations/AddDestination';
import { destinations as destinationsActions } from '../actions';
import { signedIn } from '../reducers';

class AddDestinationContainer extends Component {
  render() {
    return this.props.signedIn ? 
      <AddDestination {...this.props} /> :
      <div></div>
  }
}

const mapStateToProps = (state) => ({
  signedIn: signedIn(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick(e) {
    e.preventDefault();
    const destination = {
      placeId: parseInt(ownProps.placeId),
      name: ownProps.name
    }
    return dispatch(destinationsActions.add(destination));
  }
});

AddDestinationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDestinationContainer);

export default AddDestinationContainer;
