import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { placeDetail as placeDetailActions } from '../actions';
import { getPlace, getPlaceDetail, signedIn} from '../reducers';
import NotFound from '../components/NotFound';

const container = T => class PlaceDetailContainer extends Component {
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
    return this.show() ? <T {...this.props}/> : <NotFound />
  }
}

const mapStateToProps = (state, ownProps) => ({
  placeDetail: getPlaceDetail(state),
  regionId: getPlace(state, ownProps.match.params.placeId).regionId,
  images: getPlaceDetail(state) && getPlaceDetail(state).placeInformation &&  getPlaceDetail(state).placeInformation.images,
  signedIn: signedIn(state),
  vrImage: "pano4"
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlaceDetail(placeId) {
    return dispatch(placeDetailActions.fetchPlaceDetail(placeId));
  }
});

export default compose(
  connect(mapStateToProps,mapDispatchToProps), 
  container
);
