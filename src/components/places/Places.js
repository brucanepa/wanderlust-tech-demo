import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import Place from './Place';
import styled from 'styled-components';

const Places = ({ places, region, match }) => (
  <PlacesStylized>
    
    <PlacesNameStylized>{region}
      <Back to={`/continents`}>
          arrow_back
      </Back>
    </PlacesNameStylized>
    <PlacesListStylized>
        {places.map(place =>
        <Place
          key={place.id}
          match={match}
          {...place}
        />
      )}
    </PlacesListStylized> 
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

const Back = styled(Link)`
    background-color: #1e7f7e;
    border-radius: 50%;
    width: 47px;
    height: 45px;
    padding-top: 15px;
    padding-left: 13px;
    color: white;
    text-decoration: none;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    margin: 8px 2%;
    text-align: left;
    float: left;
    font-family: Material Icons;
    font-size: 35px;

    &:hover {
        background-color: #2aaba9;
    }
`

const PlacesStylized = styled.div`
    box-sizing: border-box;
    float: left;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    background-color: aliceblue;
    color: #757575;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    transition: 0.5s;
    @media only screen and (min-width: 768px) {
        width: 83.33%
    }
`;


const PlacesNameStylized = styled.h1`
    box-sizing: border-box;
    padding: 30px 0px;
    font-weight: bold;
    font-size: 4em;
    text-align: center;
    color: white;
    background-color: cadetblue;
    margin: 0 0;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19)
    @media only screen and (max-width: 650px) {
       font-size: 3em;
    }
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-image:url(${({ image }) => image ? image : 'http://cdn.wallpapersafari.com/6/52/ied8HY.jpeg'});
`;

const PlacesListStylized = styled.div`
    margin: 1%;
`;
