import React from 'react';
import { Link } from 'react-router-dom';
import PlaceRating from './PlaceRating';
import AddDestinationContainer from '../destinations/AddDestinationContainer';
import PlaceDescription from './PlaceDescription';
import PlaceActivities from './PlaceActivities';
import PlaceImages from './PlaceImages';
import VisibleReviews from '../reviews/VisibleReviews';

const PlaceDetail = ({ match }) => (
	<div>
 		<Link to="/places">
		    Back
		</Link>

		<h3>Playa tremenda playa</h3>
		<PlaceRating/>
		<AddDestinationContainer placeId={match.params.placeId}/>
		<PlaceDescription/>
		<PlaceActivities/>
		<PlaceImages/>
		<VisibleReviews placeId={match.params.placeId}/>
	</div>
);

export default PlaceDetail;
