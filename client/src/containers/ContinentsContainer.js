import React, { Component } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { continents as continentsActions } from '../actions';
import { getContinents } from '../reducers';

const container = T => class ContinentsContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    this.props.fetchContinents();
  }
  render() {
    return <T {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  continents: getContinents(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchContinents() {
    return dispatch(continentsActions.fetchContinents());
  }
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  container
);
