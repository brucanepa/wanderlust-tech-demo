import React, { Component } from 'react';
import { connect } from 'react-redux';
import { destinations as destinationsActions } from '../../actions';
import Destinations from './Destinations';
import { getVisibleDestinations } from '../../reducers';

class VisibleDestinations extends Component {
  componentDidMount() {
    this.fetchData();
  }
  /*componentDidUpdate(prevProps, prevState) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }*/
  fetchData() {
    const { filter } = this.props;
    this.props.fetchDestinations(filter);
  }
  render() {
    return <Destinations {...this.props} />
  }
}

const mapStateToProps = (state) => ({
    destinations: getVisibleDestinations(state)
});

const mapDispatchToProps = (dispatch) => ({
    fetchDestinations(filter) {
      return dispatch(destinationsActions.fetchDestinations(filter));
    }
});

VisibleDestinations = connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleDestinations);

export default VisibleDestinations;
