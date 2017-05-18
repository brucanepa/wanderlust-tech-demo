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
import { texts } from '../../constants';
import { defaultImage } from '../../constants';

const PlaceDetail = ({ placeDetail, regionId, images, match}) => (
  <PlaceDetailStylized>
    <PlaceDetailNameStylized image={images && images[0] || defaultImage}>{placeDetail.placeInformation.name}
      <Back to={regionId ? `/regions/${regionId}` : '/continents'}>
          arrow_back
      </Back>
      <HeaderRating>   
          <PlaceRating {...placeDetail.placeRating} rating={1} total={1}/>
          {placeDetail.placeRating.rating}
      </HeaderRating>
      
    </PlaceDetailNameStylized>
    <Column>
      <AddStylized>
        <AddDestinationContainer placeId={match.params.placeId} name={placeDetail.placeInformation.name}/>
        {texts.addAsDestiantion}
      </AddStylized>
      <PlaceDescription description={placeDetail.placeInformation.description}/>
      <PlaceActivities activities={placeDetail.placeInformation.activities}/>
      <Reviews reviews={placeDetail.reviewList} />
      <AddReview placeId={match.params.placeId} />
    </Column>
    <Column>
        <PlaceImages images={images}/>
    </Column>
  </PlaceDetailStylized>
);

export default PlaceDetail;

PlaceDetail.propTypes = {
  name: PropTypes.string,
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
  match: PropTypes.any
};

const Back = styled(Link)`
    background-color: #1e7f7e;
    border-radius: 50%;
    width: 47px;
    height: 45px;
    padding-top: 15px;
    padding-left: 13px;
    color: white;
    text-decoration: none;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    margin: 1% 2%;
    text-align: left;
    float: left;
    font-family: Material Icons;
    font-size: 35px;
    outline: none;
    transition: 0.8s;
    &:hover {
        background-color: #2aaba9;
    }
`

const PlaceDetailStylized = styled.div`
    box-sizing: border-box;
    float: left;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    background-color: aliceblue;
    color: #757575;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    transition: 0.8s;
    @media only screen and (min-width: 768px) {
        width: 83.33%
    }
`;

const PlaceDetailNameStylized = styled.h1`
    box-sizing: border-box;
    padding: 2.5% 0;
    margin: 0;
    font-weight: bold;
    font-size: 4em;
    text-align: center;
    color: white;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-image:url(${({ image }) => image});
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    text-shadow: -1px 0 #1e7f7e, 0 1px #1e7f7e, 1px 0 #1e7f7e, 0 -1px #1e7f7e;
    
    @media only screen and (max-width: 768px) {
       font-size: 3em;
    }
`;

const Column = styled.div`
    margin: 0%;
    float: left;
    width: 100%;
    @media only screen and (min-width: 768px) {
       width: 45%;
       margin: 2%;
    }
`;

const AddStylized = styled.div`
  float: right;
  margin: 0% 1%;
  text-align: center;
`;

const HeaderRating = styled.div`
    margin: 0% 5%;
    display: flex;
    float: right;
`;