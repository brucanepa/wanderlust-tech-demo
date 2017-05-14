import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import Place from './Place';
import styled from 'styled-components';

const Places = ({ places, match }) => (
  <PlacesStylized>
    <Link to={`/continents`}>
      Back
    </Link>
    <h2>Places</h2>
    <ul>
        {places.map(place =>
        <Place
          key={place.id}
          match={match}
          {...place}
        />
      )}
    </ul> 
  </PlacesStylized>
);

export default Places;

Places.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  match: PropTypes.any
};

const PlacesStylized = styled.div`
    height: 93%;
    background-color: #dadada;
    overflow-x: hidden;
    margin: 5px 5px;
    transition: 0.5s;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    color: #757575;
    width: 98%;
    padding-left: 265px;
    float: left;
    box-sizing: border-box;
    @media only screen and (max-width: 650px) {
      padding-left: 0px;
    }
`;

