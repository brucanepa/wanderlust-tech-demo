import React, { PropTypes } from 'react';
import Regions from '../regions/Regions';

const Continent = ({ name, regions, match }) => (
  <li>
    <h2>{name}</h2>
    <Regions
      match={match}
      regions={regions}
    />
  </li>
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
