import React, { Component } from 'react';
import { connect } from 'react-redux';
import { destinations as destinationsActions } from '../../actions';
import DestinationsFooter from './DestinationsFooter';
import { getSelectedIdDestination } from '../../reducers';


class DestinationsFooterContainer extends Component {
  render() {
    return <DestinationsFooter {...this.props} />
  }
}

const mapStateToProps = (state) => ({
    selectedId: getSelectedIdDestination(state)
});

const mapDispatchToProps = (dispatch) => ({
    onClickUp(id) {
      return dispatch(destinationsActions.swapPositionUp(id));
    },
    onClickDown(id) {
      return dispatch(destinationsActions.swapPositionDown(id));
    },
    onClickRemove(id) {
      return dispatch(destinationsActions.remove(id));
    }
});

DestinationsFooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DestinationsFooterContainer);

export default DestinationsFooterContainer;
