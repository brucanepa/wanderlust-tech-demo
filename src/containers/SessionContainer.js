import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signedIn, getUser } from '../reducers';
import { session as sessionActions } from '../actions';

const container = T => class SessionContainer extends Component {
  render() {
    return <T {...this.props}/>
  }
}

const mapStateToProps = (state, ownProps) => ({
  signedIn: signedIn(state),
  name: getUser(state).name
});

const mapDispatchToProps = (dispatch) => ({
  onSignOutClick() {
    return dispatch(sessionActions.signOut());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
