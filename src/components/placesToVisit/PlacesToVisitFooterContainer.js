import React, { Component } from 'react';
import { connect } from 'react-redux';
import { placesToVisit as placesActions } from '../../actions';
import PlacesToVisitFooter from './PlacesToVisitFooter';
import { getSelectedIdPlaceToVisit } from '../../reducers';


class PlacesToVisitFooterContainer extends Component {
  render() {
    return <PlacesToVisitFooter {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    selectedId: getSelectedIdPlaceToVisit(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickUp: (id) => {
      return dispatch(placesActions.swapPositionUp(id));
    },
    onClickDown: (id) => {
      return dispatch(placesActions.swapPositionDown(id));
    },
    onClickRemove: (id) => {
      return dispatch(placesActions.remove(id));
    }
  };
};

PlacesToVisitFooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlacesToVisitFooterContainer);

export default PlacesToVisitFooterContainer;
