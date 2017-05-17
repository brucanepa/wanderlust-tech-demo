import React, { Component } from 'react';
import { connect } from 'react-redux';
import Destination from './Destination'
import { destinations as destinationsActions } from '../../actions';
import { getSelectedDestinationId } from '../../reducers';

class DestinationContainer extends Component {
  render() {
    return <Destination {...this.props} />
  }
}

const mapStateToProps = (state, ownProps) => ({
  selected: getSelectedDestinationId(state) === ownProps.id
});

const mapDispatchToProps = (dispatch) => ({
  onClick(id, index) {
    return dispatch(destinationsActions.setSelected(id, index));
  },
  onClickRemove(id) {
    return dispatch(destinationsActions.remove({id}));
  }
});

DestinationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DestinationContainer);

export default DestinationContainer;
