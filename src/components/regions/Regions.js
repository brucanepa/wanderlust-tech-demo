import React, { PropTypes } from 'react';
import Region from './Region';
import styled from 'styled-components';
import america from '../../america.jpg';

const Regions = ({ regions, match }) => (
    <RegionsStylized>
        {regions.map(region =>
          <Region
            key={region.id}
            match={match}
            {...region}
            image={america}
          />
        )}
    </RegionsStylized> 
);

Regions.propTypes = {
  regions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  match: PropTypes.any
};

export default Regions;

const RegionsStylized = styled.div`
    margin-left: 1%;
`; 