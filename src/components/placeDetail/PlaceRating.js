import React, { Component } from 'react';
import Rater from 'react-rater';
import '../../App.css';

class PlaceRating extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: props.rating || 0,
      interactive: props.interactive || false,
      total: props.total || 5
    }
  }

  handleRate({ rating, type }) {
    this.setState({
      rating: rating
    })

    if (type === 'click') {
    	this.props.onRateClick(rating);
    }
  }

  render() {
    return <Rater className={"react-rater"} 
      total={this.state.total} 
      interactive={this.state.interactive} 
      rating={this.state.rating} 
      onRate={this.handleRate.bind(this)} />
  }
}

export default PlaceRating;
