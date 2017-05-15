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
    box-sizing: border-box;
    float: left;
    width: 100%;
    z-index: 1;
    padding-top: 20px;
    overflow-x: hidden;
    background-color: #1e7f7e;
    color: #757575;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    transition: 0.5s;
    @media only screen and (min-width: 768px) {
      width: 16.66%;
      height: 100vh;
    }
`;

