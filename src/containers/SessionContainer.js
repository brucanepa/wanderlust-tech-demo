import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { signedIn, getUser } from '../reducers';
import { session as sessionActions } from '../actions';
import { texts } from '../constants';

const container = T => class SessionContainer extends Component {
  static navigationOptions = {
    title: texts.myTripTitle
  };
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  container
);
