import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { placeDetail as placeDetailActions } from '../actions';
import { getPlace, getPlaceDetail, signedIn } from '../reducers';
import NotFound from '../components/NotFound';

const getPlaceId = (props) => {
  return props.match ? props.match.params.placeId : props.navigation.state.params.placeId;
}

const container = T => class PlaceDetailContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    this.props.fetchPlaceDetail(getPlaceId(this.props));
  }
  show() {
    const placeDetail = this.props.placeDetail;
    return placeDetail && placeDetail.placeInformation.description;
  }
  render() {
    return this.show() ? <T {...this.props}/> : <NotFound />
  }
}

const mapStateToProps = (state, ownProps) => ({
  placeDetail: getPlaceDetail(state),
  regionId: getPlace(state, getPlaceId(ownProps)).regionId,
  images: getPlaceDetail(state) && getPlaceDetail(state).placeInformation && getPlaceDetail(state).placeInformation.images,
  signedIn: signedIn(state),
  vrImage: getPlaceDetail(state) && getPlaceDetail(state).placeInformation && getPlaceDetail(state).placeInformation.vrImage
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlaceDetail(placeId) {
    return dispatch(placeDetailActions.fetchPlaceDetail(placeId));
  }
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  container
);
