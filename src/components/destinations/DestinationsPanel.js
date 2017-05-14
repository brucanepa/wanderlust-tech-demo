import React from 'react';
import '../../App.css';
import DestinationsContainer from './DestinationsContainer';
import DestinationsFooterContainer from './DestinationsFooterContainer';
import styled from 'styled-components';

const DestinationsPanel = ({ match }) => (
  <ResponsivePanel>
  	<div className="toVisitPanelTitle">
  		Plan your trip!
  	</div>
    <DestinationsContainer />
    <DestinationsFooterContainer/>
  </ResponsivePanel>
);

export default DestinationsPanel;

const ResponsivePanel = styled.div`
	  height: 99%;
    width: 250px;
    z-index: 1;
    position: fixed;
    margin: 5px 5px;
    background-color: #1e7f7e;
    overflow-x: hidden;
    padding-top: 20px;
    transition: 0.5s;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    color: #757575;
    box-sizing: border-box;
    @media only screen and (max-width: 650px) {
      position: initial;
      width: 98%
    }

`;

