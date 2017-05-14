import React, { PropTypes } from 'react';
import Continent from './Continent';
import styled from 'styled-components';

const Continents = ({ continents, match }) => (
  <ContinentsStylized>
    <ContinentNameStylized>FIND YOUR NEXT DESTINY</ContinentNameStylized>
    <ContinentsListStylized>
      {continents.map(continent =>
        <Continent
          key={continent.id}
          match={match}
          {...continent}
        />
      )}
    </ContinentsListStylized> 
  </ContinentsStylized>
);

export default Continents;

Continents.propTypes = {
  continents: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    regions: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired).isRequired,
  }).isRequired).isRequired,
  match: PropTypes.any
};

const ContinentsStylized = styled.div`
    height: 93%;
    background-color: aliceblue;
    overflow-x: hidden;
    margin: 5px 5px;
    transition: 0.5s;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    color: #757575;
    width: 99%;
    padding-left: 250px;
    float: left;
    box-sizing: border-box;
    overflow: hidden;
    @media only screen and (max-width: 650px) {
      padding-left: 0px;
    }
`;

const ContinentsListStylized = styled.div` 
  box-sizing: border-box;
  margin: 0;
  padding: 0;
    display: grid;
`;

const ContinentNameStylized = styled.h1`
  padding: 30px 0px;
  font-size: 4em;
  font-weight: bold;
  text-align: center;
  color: white;
  box-sizing: border-box;
  background-color: #ffd535;
  margin: 0 0;
  box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19)
`;