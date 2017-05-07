import React from 'react';
import '../../App.css';
import VisiblePlacesToVisit from './VisiblePlacesToVisit';
import PlacesToVisitFooter from './PlacesToVisitFooter';

let onToVisitClick = () => { return };

const PlacesToVisitPanel = ({ match }) => (
  <div className="ToVisitPanel">
  	<div className="ToVisitPanelTitle">
  		Plan your trip!
  	</div>
    <div className="ToVisitPanelItem">
      <VisiblePlacesToVisit />
    </div>
    <PlacesToVisitFooter/>
  </div>
);

export default PlacesToVisitPanel;
