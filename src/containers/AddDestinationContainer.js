import React, { Component } from 'react';
import { connect } from 'react-redux';
import { destinations as destinationsActions } from '../actions';
import { signedIn } from '../reducers';

const container = T => class AddDestinationContainer extends Component {
  render() {
    return <T {...this.props} /> 
  }
}

const mapStateToProps = (state) => ({
  signedIn: signedIn(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick(e) {
    e && e.preventDefault();
    const destination = {
      placeId: parseInt(ownProps.placeId),
      name: ownProps.name
    }
    return dispatch(destinationsActions.add(destination));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
