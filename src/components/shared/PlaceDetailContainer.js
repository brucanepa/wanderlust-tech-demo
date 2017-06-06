import React, { Component } from 'react';
import { connect } from 'react-redux';
import { placeDetail as placeDetailActions } from '../../actions';
import { getPlace, getPlaceDetail, signedIn} from '../../reducers';
import WebPlaceDetail from '../web/placeDetail/PlaceDetail';
import WebNotFound from '../web/NotFound';

class PlaceDetailContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    this.props.fetchPlaceDetail(this.props.match.params.placeId);
  }
  show() {
    const placeDetail = this.props.placeDetail;
    return placeDetail && placeDetail.placeInformation.description;
  }
  render() {
    return this.show() ? <WebPlaceDetail {...this.props}/> : <WebNotFound />
  }
}

const mapStateToProps = (state, ownProps) => ({
  placeDetail: getPlaceDetail(state),
  regionId: getPlace(state, ownProps.match.params.placeId).regionId,
  images: getPlaceDetail(state) && getPlaceDetail(state).placeInformation &&  getPlaceDetail(state).placeInformation.images,
  signedIn: signedIn(state)
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
