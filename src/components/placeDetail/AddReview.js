import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { placeDetail as placeDetailActions } from '../../actions';
import PlaceRating from './PlaceRating';

const AddReview = ({ dispatch, placeId }) => {
  let input;
  let rating = 0;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    dispatch(placeDetailActions.addReview(placeId, input.value, rating));
    input.value = '';
  }

  const onRateClick = (ratingSelected) => {
    rating = ratingSelected;
  }

  return (
    <div>
      <PlaceRating onRateClick={onRateClick} interactive={true}/>
      <form onSubmit={ (e) => onSubmit(e) }>
        <input ref={node => { input = node; }} />
        <button type="submit">
        Agregar
        </button>
      </form>
    </div>
  );
};

AddReview.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddReview);
