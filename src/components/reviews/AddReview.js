import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { placeDetail as placeDetailActions } from '../../actions';
//import PlaceRating from '../places/PlaceRating';

const AddReview = ({ dispatch, placeId }) => {
  let input;
  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    dispatch(placeDetailActions.addReview(placeId, input.value, 4));
    input.value = '';
  };

  return (
	<div>
		{/*<PlaceRating/>*/}
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
