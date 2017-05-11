import React from 'react';
import '../../App.css';
import DestinationsContainer from './DestinationsContainer';
import DestinationsFooterContainer from './DestinationsFooterContainer';

const DestinationsPanel = ({ match }) => (
  <div className="ToVisitPanel">
  	<div className="ToVisitPanelTitle">
  		Plan your trip!
  	</div>
    <div className="ToVisitPanelItem">
      <DestinationsContainer />
    </div>
    <DestinationsFooterContainer/>
  </div>
);

export default DestinationsPanel;
