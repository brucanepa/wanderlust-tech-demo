import React, { Component } from 'react';
import { connect } from 'react-redux';
import { destinations as destinationsActions } from '../actions';
import { getSelectedDestinationInfo } from '../reducers';

const mapStateToProps = (state) => ({
  selectedInfo: getSelectedDestinationInfo(state)
});

const mapDispatchToProps = (dispatch) => ({
  onClickUp(info) {
    return dispatch(destinationsActions.swapPositionUp(info.selected, info.selectedUp));
  },
  onClickDown(info) {
    return dispatch(destinationsActions.swapPositionDown(info.selected, info.selectedDown));
  }
});

export default connect(mapStateToProps, mapDispatchToProps);
