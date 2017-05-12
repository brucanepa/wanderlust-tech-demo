import React, { Component } from 'react';
import { connect } from 'react-redux';
import { placeDetail as placeDetailActions } from '../../actions';
import PlaceDetail from './PlaceDetail';
import { getPlace} from '../../reducers';
import { getPlaceDetail } from '../../reducers';

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

/*const mapStateToProps = function(state, ownProps) {
  const place = getPlace(state, ownProps.match.params.placeId);
  const placeDetail = getPlaceDetail(state);
  return {name:place.name, placeDetail};
}*/
const mapStateToProps = (state, ownProps) => ({
  name: getPlace(state, ownProps.match.params.placeId).name,
  placeDetail: getPlaceDetail(state),
  regionId: getPlace(state, ownProps.match.params.placeId).regionId
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
