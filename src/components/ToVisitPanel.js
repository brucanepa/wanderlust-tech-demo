import React from 'react';
import '../App.css';
import logo from '../logo.svg'
import ToVisitList from './ToVisitList';
import ToVisitFooter from './ToVisitFooter';

let onToVisitClick = () => { return };

const ToVisitPanel = ({ match }) => (
  <div className="ToVisitPanel">
  	<div className="ToVisitPanelTitle">
  		Plan your trip!
  	</div>
    <div className="ToVisitPanelItem">
      <ToVisitList placesToVisit={[{id: 1, text: "place"}, {id: 2, text: "place2"}]} onToVisitClick={() => onToVisitClick()}/>
    </div>
    <ToVisitFooter/>
  </div>
);

export default ToVisitPanel;
