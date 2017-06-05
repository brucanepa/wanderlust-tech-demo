import React, { Component } from 'react';
import { connect } from 'react-redux';
import { continents as continentsActions } from '../../actions';
import WebContinents from '../web/continents/Continents';
import { getContinents } from '../../reducers';

class ContinentsContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    this.props.fetchContinents();
  }
  render() {
    return <WebContinents {...this.props} />
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

ContinentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContinentsContainer);

export default ContinentsContainer;
