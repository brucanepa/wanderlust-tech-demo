import React, { Component } from 'react';
import { connect } from 'react-redux';
import Destination from './Destination'
import { destinations as destinationsActions } from '../../actions';
import { getSelectedIdDestination } from '../../reducers';


class DestinationContainer extends Component {
  render() {
    return <Destination {...this.props} />
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    selected: getSelectedIdDestination(state).selectedId === ownProps.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickUp: (id) => {
      return dispatch(destinationsActions.swapPositionUp(id));
    }
  };
};

DestinationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DestinationContainer);

export default DestinationContainer;
