import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import PlaceRating from './PlaceRating';
import AddDestinationContainer from '../destinations/AddDestinationContainer';
import PlaceDescription from './PlaceDescription';
import PlaceActivitiesContainer from './PlaceActivitiesContainer';
import PlaceImages from './PlaceImages';
import VisibleReviews from '../reviews/VisibleReviews';

const PlaceDetail = ({name, placeDetail, regionId, match}) => (
	<div>
   <Link to={ `/regions/${regionId}` }> 
		 Back
   </Link>
   <h3>{ name }</h3>
   <PlaceRating/>
   <AddDestinationContainer placeId={ match.params.placeId } />
   <PlaceDescription description={ placeDetail.placeInformation.description } />
   <PlaceActivitiesContainer />
   <PlaceImages/>
   <VisibleReviews placeId={ match.params.placeId } />
 </div>
);

export default PlaceDetail;

PlaceDetail.propTypes = {
	name: PropTypes.string.isRequired,
	placeDetail: PropTypes.shape({
		placeInformation: PropTypes.shape({
			activities: PropTypes.arrayOf(PropTypes.shape({
				id: PropTypes.number.isRequired,
				name: PropTypes.string.isRequired,
				description: PropTypes.string.isRequired
			}).isRequired).isRequired,
			description: PropTypes.string.isRequired
		})
	}),
	regionId: PropTypes.number.isRequired,
	match: PropTypes.any
};