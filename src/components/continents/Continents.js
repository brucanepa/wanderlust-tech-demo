import React, { PropTypes } from 'react';
import Continent from './Continent';
import styled from 'styled-components';

const Continents = ({ continents, match }) => (
  <ContinentsStylized>
    <HeaderContinentStylized>Regions by continents</HeaderContinentStylized>
    <ul>
      {continents.map(continent =>
        <Continent
          key={continent.id}
          match={match}
          {...continent}
        />
      )}
    </ul> 
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
    background-color: #dadada;
    overflow-x: hidden;
    margin: 5px 5px;
    transition: 0.5s;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    color: #757575;
    width: 98%;
    padding-left: 265px;
    float: left;
    box-sizing: border-box;
    @media only screen and (max-width: 650px) {
      padding-left: 0px;
    }
`;

const HeaderContinentStylized = styled.h2`
  padding-left: 25px;
  font-size: 2em;
`;