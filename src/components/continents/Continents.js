import React, { PropTypes } from 'react';
import Continent from './Continent';
import styled from 'styled-components';

const Continents = ({ continents, match }) => (
  <ContinentsStylized>
    <ContinentNameStylized>FIND YOUR NEXT DESTINY</ContinentNameStylized>
    <div>
      {continents.map(continent =>
        <Continent
          key={continent.id}
          match={match}
          {...continent}
        />
      )}
    </div> 
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
    box-sizing: border-box;
    float: left;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    background-color: aliceblue;
    color: #757575;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    transition: 0.5s;
    @media only screen and (min-width: 768px) {
        width: 83.33%
    }
`;

const ContinentNameStylized = styled.h1`
    box-sizing: border-box;
    padding: 30px 0px;
    margin: 0 0;
    text-align: center;
    font-size: 4em;
    font-weight: bold;
    background-color: cadetblue;
    color: white;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
`;