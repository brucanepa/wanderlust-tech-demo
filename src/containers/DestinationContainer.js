import React, { Component } from 'react';
import { connect } from 'react-redux';
import { destinations as destinationsActions } from '../actions';
import { getSelectedDestinationId } from '../reducers';

const container = T => class DestinationContainer extends Component {
  render() {
    return <T {...this.props} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
