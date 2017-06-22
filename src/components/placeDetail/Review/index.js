import React from 'react';
import styled from 'styled-components';
import PlaceRating from '../PlaceRating';
import { texts } from '../../../constants';

const Review = ({id, comment, rating}) => (
	<li>
   <RatingName>{texts.ratingTitle} </RatingName>
   <PlaceRating rating={ rating } />
   <Description>
     { comment }
   </Description>
   <Subseparator/>
 </li>
);

export default Review;

const Subseparator = styled.hr`
    border-top: 1px solid #5f9ea0;
`;

const Description = styled.p`
	  word-wrap: break-word;
`;

const RatingName = styled.h2`
	  font-size: 1.4em;
    display: inline-flex;
    margin: 0; 
 `;
