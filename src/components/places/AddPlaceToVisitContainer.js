import React, { Component } from 'react';
import { connect } from 'react-redux';
import { placesToVisit as placesActions } from '../../actions';
import AddPlaceToVisit from './AddPlaceToVisit';

class AddPlaceToVisitContainer extends Component {
  render() {
    return <AddPlaceToVisit {...this.props} />
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      return dispatch(placesActions.add(parseInt(ownProps.id)));
    }
  };
};

AddPlaceToVisitContainer = connect(
  null,
  mapDispatchToProps
)(AddPlaceToVisitContainer);

export default AddPlaceToVisitContainer;
