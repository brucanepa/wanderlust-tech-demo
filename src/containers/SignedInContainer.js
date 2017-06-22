import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignedIn from '../components/session/SignedIn';
import { session as sessionActions } from '../actions';
import { getUser } from '../reducers';

class SignedInContainer extends Component {
  render() {
    return <SignedIn {...this.props} />
  }
}

const mapStateToProps = (state, ownProps) => ({
  name: getUser(state).name
});

const mapDispatchToProps = (dispatch) => ({
  onSignOutClick() {
    return dispatch(sessionActions.signOut());
  }
});

SignedInContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignedInContainer);

export default SignedInContainer;
