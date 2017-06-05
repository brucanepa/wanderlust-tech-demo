import React from 'react';
import { Link } from 'react-router-dom';
import Place from './Place';
import styled from 'styled-components';
import { defaultImage } from '../../../constants';

const Places = ({ places, regionName, regionImage }) => (
  <PlacesStylized>
    <PlacesNameStylized image={regionImage || defaultImage}>{regionName}
      <Back to={`/continents`}>
          arrow_back
      </Back>
    </PlacesNameStylized>
    <PlacesListStylized>
        {places.map(place =>
        <Place
            key={place.id}
            {...place}
        />
      )}
    </PlacesListStylized> 
  </PlacesStylized>
);

export default Places;

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
    margin: 1% 2%;
    text-align: left;
    float: left;
    font-family: Material Icons;
    font-size: 35px;
    outline: none;
    transition: 0.8s;
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
    transition: 0.8s;
    @media only screen and (min-width: 768px) {
        width: 83.33%
    }
`;


const PlacesNameStylized = styled.h1`
    box-sizing: border-box;
    padding: 2.5% 0;
    margin: 0;
    font-weight: bold;
    font-size: 3em;
    text-align: center;
    color: white;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-image:url(${({ image }) => image});
    text-shadow: -1px 0 #1e7f7e, 0 1px #1e7f7e, 1px 0 #1e7f7e, 0 -1px #1e7f7e;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
   
    @media only screen and (min-width: 768px) {
       font-size: 4em;
    }
`;

const PlacesListStylized = styled.div`
    margin: 0;
    @media only screen and (min-width: 768px) {
      margin: 1%;
    }
`;
