import React, { PropTypes } from 'react';
import Regions from '../regions/Regions';
import styled from 'styled-components';

const Continent = ({ name, regions, match }) => (
  <ContinentStylized>
    <h2>{name}</h2>
    <Regions
      match={match}
      regions={regions}
    />
  </ContinentStylized>
);

Continent.propTypes = {
  regions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  name: PropTypes.string.isRequired,
  match: PropTypes.any
};

export default Continent;

const ContinentStylized = styled.li`
  display: inline-block;
`;
