import React, { PropTypes } from 'react';
import PlaceActivity from './PlaceActivity'
import styled from 'styled-components';
import { texts } from '../../constants';

const PlaceActivities = ({ activities }) => (
  <PlaceActivitiesStylized>
    <h1>{texts.activitiesTitle}</h1>
    <Separator/>
    <ul>
      { activities.map(activitiy => 
     	  <PlaceActivity 
     		key={activitiy.id} 
     		{...activitiy}/>
     	)
     }
    </ul>
  </PlaceActivitiesStylized>
);

export default PlaceActivities;

PlaceActivities.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired).isRequired
};

const PlaceActivitiesStylized = styled.div`
  margin: 2%;
`;

const Separator = styled.hr`
    border: 0;
    border-top: 2px solid #1e7f7e;
`;