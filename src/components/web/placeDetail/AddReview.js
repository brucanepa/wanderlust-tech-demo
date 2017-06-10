import React from 'react'
import { connect } from 'react-redux'
import { placeDetail as placeDetailActions } from '../../../actions'
import PlaceRating from './PlaceRating'
import styled from 'styled-components'
import { texts } from '../../../constants'

const AddReview = ({ dispatch, placeId, signedIn }) => {
  let input;
  let rating = 0;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim() || rating < 1) {
      return;
    }
    dispatch(placeDetailActions.addReview({placeId, comment: input.value, rating}));
    input.value = '';
    rating = 0;
  }

  const onRateClick = (ratingSelected) => {
    rating = ratingSelected;
  }

  return signedIn ? (
    <AddReviewStylized>
      <Description>{texts.reviewsComment}</Description>
      <PlaceRatingStylized>
        <PlaceRating onRateClick={onRateClick} interactive={true}/>
      </PlaceRatingStylized>
      <form onSubmit={ (e) => onSubmit(e) }>
        <InputStylized innerRef={node => { input = node; }} placeholder={texts.reviewsPlaceholder} />
        <AddButton type="submit">
          {texts.comment}
        </AddButton>
      </form>
  
    </AddReviewStylized>
  ) : <AddReviewStylized/>;
};

const AddReviewStylized = styled.div`
  margin: 0;

  @media only screen and (min-width: 768px) {
      margin: 8%;
  }
`;

const Description = styled.p`
  font-size: 1.4em;
  margin: 2%;

  @media only screen and (min-width: 768px) {
      margin: 0;
  }
`;

const InputStylized = styled.textarea`
    border-radius: 5px;
    outline: none;
    font-size: 1.2em;
    padding: 1% 2%;
    height: 10em;
    width: 96%;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    border-radius: 5px;
    outline: none;
    resize: none;
    &:hover {
      box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
    }
`;

const PlaceRatingStylized = styled.div`
    font-size: 2em;
`;

const AddButton = styled.button`
    float: right;
    width: 100%;
    padding: 2%;
    font-size: 1.4em;
    text-align: center;
    border: none;
    outline: none;
    color: white;
    background-color: #1e7f7e;
    transition: 0.8s;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    margin-bottom: 5%;
    &:hover {
      background-color: #2aaba9;
      color: white;
    }
`;
export default connect()(AddReview);


