import React from 'react';
import { Link } from 'react-router-dom';
import PlaceRating from './PlaceRating';
import AddPlaceToVisitContainer from './AddPlaceToVisitContainer';
import PlaceDescription from './PlaceDescription';
import PlaceActivities from './PlaceActivities';
import PlaceImages from './PlaceImages';
import PlaceReviews from './PlaceReviews';
import AddPlaceReview from './AddPlaceReview';

const PlaceDetail = ({ match }) => (
	<div>
 		<Link to="/places">
		    Back
		</Link>

		<h3>Playa tremenda playa</h3>
		<PlaceRating/>
		<AddPlaceToVisitContainer id={match.params.placeId}/>
		<PlaceDescription/>
		<PlaceActivities/>
		<PlaceImages/>
		<PlaceReviews/>
		<AddPlaceReview/>
		
	</div>
);

export default PlaceDetail;
