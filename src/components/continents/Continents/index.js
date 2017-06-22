import React from 'react';
import styled from 'styled-components';
import Continent from '../Continent';
import { texts } from '../../../constants';

const Continents = ({continents}) => (
  <ContinentsStylized>
    <ContinentNameStylized>{texts.pageTitle}</ContinentNameStylized>
    <div>
      { 
        continents.map(continent => 
        <Continent key={ continent.id } 
          {...continent} />)
      }
    </div>
  </ContinentsStylized>
);

export default Continents;

const ContinentsStylized = styled.div`
    box-sizing: border-box;
    float: left;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    background-color: aliceblue;
    color: #757575;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    transition: 0.8s;
    @media only screen and (min-width: 768px) {
        width: 83.33%
    }
`;

const ContinentNameStylized = styled.h1`
    box-sizing: border-box;
    padding: 2.5% 0;
    margin: 0;
    text-align: center;
    font-size: 4em;
    font-weight: bold;
    background-color: cadetblue;
    color: white;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
`;