import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { placeDetail as placeDetailActions } from '../../actions';
import PlaceRating from './PlaceRating';
import styled from 'styled-components';
import { texts } from '../../constants';

const AddReview = ({ dispatch, placeId }) => {
  let input;
  let rating = 0;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim() || rating < 1) {
      return;
    }
    dispatch(placeDetailActions.addReview({placeId, comment: input.value, rating}));
    input.value = '';
  }

  const onRateClick = (ratingSelected) => {
    rating = ratingSelected;
  }

  return (
    <AddReviewStylized>
      <Description>{texts.reviewsComment}</Description>
      <PlaceRating onRateClick={onRateClick} interactive={true}/>
      <form onSubmit={ (e) => onSubmit(e) }>
        <InputStylized innerRef={node => { input = node; }} />
        <button type="submit">
        {texts.add}
        </button>
      </form>
    </AddReviewStylized>
  );
};

AddReview.propTypes = {
  dispatch: PropTypes.func.isRequired,
  placeId: PropTypes.string.isRequired
};

const AddReviewStylized = styled.div`
  margin: 2%;
`;

const Description = styled.p`
  font-size: 1.4em;
`;

const InputStylized = styled.textarea`
    margin: 0;
    width: 80%;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    border-radius: 5px;
    outline: none;
    font-size: 1.2em;
    padding: 0 10px 130px;
    resize: none;
    &:hover {
      box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
    }

    @media only screen and (min-width: 768px) {
        width: 50%
    }
`;


export default connect()(AddReview);


