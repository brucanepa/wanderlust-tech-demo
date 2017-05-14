import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import AddDestinationContainer from '../destinations/AddDestinationContainer';
import PlaceDescription from './PlaceDescription';
import PlaceActivities from './PlaceActivities';
import PlaceImages from './PlaceImages';
import PlaceRating from './PlaceRating';
import AddReview from '../placeDetail/AddReview';
import Reviews from '../placeDetail/Reviews';
import styled from 'styled-components';

const PlaceDetail = ({ name, placeDetail, regionId, match }) => (
  <PlaceDetailStylized>
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
	</PlaceDetailStylized>
);

export default PlaceDetail;

const PlaceDetailStylized = styled.div`
    height: 93%;
    background-color: #dadada;
    overflow-x: hidden;
    margin: 5px 5px;
    transition: 0.5s;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    color: #757575;
    width: 98%;
    padding-left: 265px;
    float: left;
    box-sizing: border-box;
    @media only screen and (max-width: 650px) {
       padding-left: 0px;
    }
`;


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
