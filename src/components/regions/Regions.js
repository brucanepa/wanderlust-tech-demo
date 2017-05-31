import React, { PropTypes } from 'react';
import Region from './Region';
import styled from 'styled-components';

const Regions = ({ regions }) => (
  <RegionsStylized>
    {regions.map(region =>
      <Region
        key={region.id}
        {...region}
      />
    )}
  </RegionsStylized> 
);

Regions.propTypes = {
  regions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string
  }).isRequired).isRequired
};

export default Regions;

const RegionsStylized = styled.div`
    margin-left: 0;
    @media only screen and (min-width: 768px) {
      margin-left: 1%;
    }
`; 