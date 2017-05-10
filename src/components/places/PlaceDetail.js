import React from 'react';
import { Link } from 'react-router-dom';
import PlaceRating from './PlaceRating';
import AddDestinationContainer from '../destinations/AddDestinationContainer';
import PlaceDescription from './PlaceDescription';
import PlaceActivities from './PlaceActivities';
import PlaceImages from './PlaceImages';
import ReviewsContainer from '../reviews/ReviewsContainer';
import AddReview from '../reviews/AddReview';

const PlaceDetail = ({ match }) => (
	<div>
 		<Link to="/places">
		    Back
		</Link>

		<h3>Playa tremenda playa</h3>
		<PlaceRating/>
		<AddDestinationContainer id={match.params.placeId}/>
		<PlaceDescription/>
		<PlaceActivities/>
		<PlaceImages/>
		<ReviewsContainer/>
		<AddReview/>
	</div>
);

export default PlaceDetail;
