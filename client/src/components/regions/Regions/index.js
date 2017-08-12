import React from 'react';
import styled from 'styled-components';
import Region from '../Region';

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

export default Regions;

const RegionsStylized = styled.div`
    margin-left: 0;
    @media only screen and (min-width: 768px) {
      margin-left: 1%;
    }
`; 