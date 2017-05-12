import React, { PropTypes } from 'react';
import Continent from './Continent';

const Continents = ({ continents, match }) => (
  <div>
    <h2>Continents</h2>
    <ul>
      {continents.map(continent =>
        <Continent
          key={continent.id}
          match={match}
          {...continent}
        />
      )}
    </ul> 
  </div>
);

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

export default Continents;
