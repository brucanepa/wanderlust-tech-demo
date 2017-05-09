import React from 'react';
import { Link } from 'react-router-dom';
import PlaceRating from './PlaceRating';
import AddDestinationContainer from './AddDestinationContainer';
import PlaceDescription from './PlaceDescription';
import PlaceActivities from './PlaceActivities';
import PlaceImages from './PlaceImages';
import PlaceReviewsContainer from './PlaceReviewsContainer';

import AddPlaceReview from './AddPlaceReview';

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
		<PlaceReviewsContainer/>
		<AddPlaceReview/>
		
	</div>
);

export default PlaceDetail;
