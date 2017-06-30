import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { signedIn, getUser, showLoading, signingIn} from '../reducers';
import { session as sessionActions } from '../actions';

const container = T => class SessionContainer extends Component {
  render() {
    return <T {...this.props}/>
  }
}

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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  container
);
