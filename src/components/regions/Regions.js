import React, { PropTypes } from 'react';
import Region from './Region';

const Regions = ({ regions, match }) => (
  <div>
      <h2>Regions</h2>
      <ul>
          {regions.map(region =>
            <Region
              key={region.id}
              match={match}
              {...region}
            />
          )}
      </ul> 
    </div>
);

Regions.propTypes = {
  regions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  match: PropTypes.any
};

export default Regions;
