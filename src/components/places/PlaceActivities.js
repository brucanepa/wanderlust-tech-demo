import React, { PropTypes } from 'react';
import PlaceActivity from './PlaceActivity'

const PlaceActivities = ({ activities }) => (
  <div>
     Activities:
     <ul>
        { activities.map(activitiy => 
       	  <PlaceActivity 
       		key={activitiy.id} 
       		{...activitiy}/>
       	)
    	 }
     </ul>
  </div>
);

export default PlaceActivities;

PlaceActivities.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired).isRequired
};
