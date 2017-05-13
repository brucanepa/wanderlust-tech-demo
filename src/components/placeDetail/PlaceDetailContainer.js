import React, { Component } from 'react';
import { connect } from 'react-redux';
import { placeDetail as placeDetailActions } from '../../actions';
import { getPlace, getPlaceDetail} from '../../reducers';
import PlaceDetail from './PlaceDetail';

class PlaceDetailContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    this.props.fetchPlaceDetail(this.props.match.params.placeId);
  }
  render() {
    return <PlaceDetail {...this.props} />
  }
}

const mapStateToProps = (state, ownProps) => ({
  name: getPlace(state, ownProps.match.params.placeId).name,
  placeDetail: getPlaceDetail(state),
  regionId: getPlace(state, ownProps.match.params.placeId).regionId,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlaceDetail(placeId) {
    return dispatch(placeDetailActions.fetchPlaceDetail(placeId));
  }
});

PlaceDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceDetailContainer);

export default PlaceDetailContainer;
