import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlaceToVisit from './PlaceToVisit'
import { placesToVisit as placesActions } from '../../actions';
import { getSelectedIdPlaceToVisit } from '../../reducers';


class PlaceToVisitContainer extends Component {
  render() {
    return <PlaceToVisit {...this.props} />
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    selected: getSelectedIdPlaceToVisit(state).selectedId === ownProps.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickUp: (id) => {
      return dispatch(placesActions.swapPositionUp(id));
    }
  };
};

PlaceToVisitContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceToVisitContainer);

export default PlaceToVisitContainer;
