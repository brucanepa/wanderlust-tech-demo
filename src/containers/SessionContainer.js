import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signedIn, getUser } from '../reducers';
import { session as sessionActions } from '../actions';
import Session from '../components/session/Session';

class SessionContainer extends Component {
  render() {
    return <Session {...this.props}/>
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

SessionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionContainer);

export default SessionContainer;
