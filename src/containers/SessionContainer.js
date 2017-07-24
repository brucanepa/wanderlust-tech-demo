import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signedIn, getUser, showLoading, signingIn } from '../reducers';
import { session as sessionActions } from '../actions';

const mapStateToProps = (state) => ({
  signedIn: signedIn(state),
  name: getUser(state).name,
  showLoading: showLoading(state),
  signingIn: signingIn(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSignOutClick() {
    return dispatch(sessionActions.signOut());
  }
});

export default connect(mapStateToProps, mapDispatchToProps);
