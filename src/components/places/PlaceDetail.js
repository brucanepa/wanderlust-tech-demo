import React from 'react';
import { Link } from 'react-router-dom';
import PlaceRating from './PlaceRating';
import AddDestinationContainer from '../destinations/AddDestinationContainer';
import PlaceDescription from './PlaceDescription';
import PlaceActivities from './PlaceActivities';
import PlaceImages from './PlaceImages';
import VisibleReviews from '../reviews/VisibleReviews';

const PlaceDetail = ({name, placeDetail, match }) => (
	<div>
 		<Link to="/places">
		    Back
		</Link>

		<h3>{name}</h3>
		<PlaceRating/>
		<AddDestinationContainer placeId={match.params.placeId}/>
		<PlaceDescription description={placeDetail.placeInformation.description}/>
		<PlaceActivities activities={placeDetail.placeInformation.activities}/>
		<PlaceImages/>
		<VisibleReviews placeId={match.params.placeId}/>
	</div>
);

// handleOnClick = () => {
//   this.context.router.push('/places');
// }

export default PlaceDetail;
