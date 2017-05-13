import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import AddDestinationContainer from '../destinations/AddDestinationContainer';
import PlaceDescription from './PlaceDescription';
import PlaceActivities from './PlaceActivities';
import PlaceImages from './PlaceImages';
import PlaceRating from './PlaceRating';
import AddReview from '../placeDetail/AddReview';
import Reviews from '../placeDetail/Reviews';

const PlaceDetail = ({ name, placeDetail, regionId, match }) => (
  <div>
		<Link to={`/regions/${regionId}`}>
		    Back
		</Link>

		<h3>{name}</h3>
		<PlaceRating {...placeDetail.placeRating}/>
		<AddDestinationContainer placeId={match.params.placeId}/>
		<PlaceDescription description={placeDetail.placeInformation.description}/>
		<PlaceActivities activities={placeDetail.placeInformation.activities}/>
		<PlaceImages/>
		<Reviews reviews={placeDetail.reviewList} />
		<AddReview placeId={match.params.placeId}/>
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
