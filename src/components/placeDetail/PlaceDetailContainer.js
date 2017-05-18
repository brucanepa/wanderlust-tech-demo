import React, { Component } from 'react';
import { connect } from 'react-redux';
import { placeDetail as placeDetailActions } from '../../actions';
import { getPlace, getPlaceDetail} from '../../reducers';
import PlaceDetail from './PlaceDetail';
import NotFound from '../NotFound';

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
    return this.show() ? <PlaceDetail {...this.props}/> : <NotFound />
  }
}

const mapStateToProps = (state, ownProps) => ({
  placeDetail: getPlaceDetail(state),
  regionId: getPlace(state, ownProps.match.params.placeId).regionId,
  images: getPlaceDetail(state) && getPlaceDetail(state).images
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
