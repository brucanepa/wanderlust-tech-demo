import React, { Component } from 'react';
import { connect } from 'react-redux';
import { placesToVisit as placesActions } from '../../actions';
import AddToVisit from './AddToVisit';


class AddToVisitContainer extends Component {
  render() {
    return <AddToVisit {...this.props} />
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      return dispatch(placesActions.add(ownProps.id));
    }
  };
};

AddToVisitContainer = connect(
  null,
  mapDispatchToProps
)(AddToVisitContainer);

export default AddToVisitContainer;
