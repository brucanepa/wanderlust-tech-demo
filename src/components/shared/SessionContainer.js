import React, { Component } from 'react';
import { connect } from 'react-redux';
import WebSignIn from '../web/session/SignIn';
import SignedInContainer from './SignedInContainer'
import { signedIn } from '../../reducers';

class SessionContainer extends Component {
  render() {
    return this.props.signedIn ?
      <SignedInContainer {...this.props}/> :
      <WebSignIn {...this.props} />
  }
}

const mapStateToProps = (state, ownProps) => ({
  signedIn: signedIn(state)
});

const mapDispatchToProps = (dispatch) => ({
});

SessionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionContainer);

export default SessionContainer;
