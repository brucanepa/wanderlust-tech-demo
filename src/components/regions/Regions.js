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
    margin: 0;
    padding: 0;
    float: left;
    transition: 0.8s;

    @media only screen and (max-width: 1480px){
        margin: 10px 4%;
    }

    @media only screen and (max-width: 1350px){
        margin: 10px 28%;
    }

    @media only screen and (max-width: 1200px){
        margin: 10px 15%;
    }

    @media only screen and (max-width: 900px){
      margin: 10px 10%;
    }

    @media only screen and (max-width: 800px){
      margin: 10px 0%;
    }
    

    @media only screen and (max-width: 750px){
      margin: 10px 15%;
    }

    @media only screen and (max-width: 650px){
      margin: 10px 20%;
      padding: 0;
    }
      
    @media only screen and (max-width: 450px){
      margin: 0;
      padding: 0;
    }
`;