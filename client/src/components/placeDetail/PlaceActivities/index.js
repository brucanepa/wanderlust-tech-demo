import React from 'react';
import styled from 'styled-components';
import PlaceActivity from '../PlaceActivity'
import { texts } from '../../../constants';

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

const PlaceActivitiesStylized = styled.div`
  margin: 2%;
`;

const Separator = styled.hr`
    border: 0;
    border-top: 2px solid #1e7f7e;
`;