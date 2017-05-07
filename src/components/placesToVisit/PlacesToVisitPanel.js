import React from 'react';
import '../../App.css';
import VisiblePlacesToVisit from './VisiblePlacesToVisit';
import PlacesToVisitFooterContainer from './PlacesToVisitFooterContainer';

let onToVisitClick = () => { return };

const PlacesToVisitPanel = ({ match }) => (
  <div className="ToVisitPanel">
  	<div className="ToVisitPanelTitle">
  		Plan your trip!
  	</div>
    <div className="ToVisitPanelItem">
      <VisiblePlacesToVisit />
    </div>
    <PlacesToVisitFooterContainer/>
  </div>
);

export default PlacesToVisitPanel;
