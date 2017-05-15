import React, { Component } from 'react';
import { connect } from 'react-redux';
import { destinations as destinationsActions } from '../../actions';
import DestinationsFooter from './DestinationsFooter';
import { getSelectedDestinationInfo } from '../../reducers';

class DestinationsFooterContainer extends Component {
  render() {
    return <DestinationsFooter {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  selectedInfo: getSelectedDestinationInfo(state)
});

const mapDispatchToProps = (dispatch) => ({
  onClickUp(info) {
    return dispatch(destinationsActions.swapPositionUp(info.selected, info.selectedUp));
  },
  onClickDown(info) {
    return dispatch(destinationsActions.swapPositionDown(info.selected, info.selectedDown));
  },
  onClickRemove(info) {
    return dispatch(destinationsActions.remove(info.selected));
  }
});

DestinationsFooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DestinationsFooterContainer);

export default DestinationsFooterContainer;
