import React from 'react';
import styled from 'styled-components';
import Regions from '../../regions/Regions';

const Continent = ({name, regions}) => (
  <ContinentStylized>
    <ContinetNameStylized>
      { name }
    </ContinetNameStylized>
    <Regions regions={ regions } />
  </ContinentStylized>
);

export default Continent;

const ContinentStylized = styled.div`
    box-sizing: border-box;
    &:after {
      content: "";
      clear: both;
      display: table;
    }
`;

const ContinetNameStylized = styled.h2`
    text-align: center;
    font-size: 3em;
`;