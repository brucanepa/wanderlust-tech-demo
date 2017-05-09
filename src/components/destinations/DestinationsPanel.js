import React from 'react';
import '../../App.css';
import VisibleDestinations from './VisibleDestinations';
import DestinationsFooterContainer from './DestinationsFooterContainer';

let onDestinationClick = () => { return };

const DestinationsPanel = ({ match }) => (
  <div className="ToVisitPanel">
  	<div className="ToVisitPanelTitle">
  		Plan your trip!
  	</div>
    <div className="ToVisitPanelItem">
      <VisibleDestinations />
    </div>
    <DestinationsFooterContainer/>
  </div>
);

export default DestinationsPanel;
