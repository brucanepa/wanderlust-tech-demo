import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import Place from './Place';
import styled from 'styled-components';

const Places = ({ places, region, match }) => (
  <PlacesStylized>
    
    
    <PlacesNameStylized>{region}
    <Back to={`/continents`}>
       🡠
    </Back></PlacesNameStylized>
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
    width: 50px;
    height: 50px;
    padding-top: 10px;
    padding-left: 10px;
    color: white;
    text-decoration: none;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    margin: -12px 2%;
    text-align: left;
    float: left;
`

const PlacesStylized = styled.div`
    box-sizing: border-box;
    float: left;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: aliceblue;
    color: #757575;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    transition: 0.5s;
    @media only screen and (min-width: 768px) {
        width: 83.33%
    }
`;


const PlacesNameStylized = styled.h1`
  padding: 30px 0px;
  font-size: 5vm;
  font-weight: bold;
  text-align: center;
  color: white;
  box-sizing: border-box;
  background-color: #ffd535;
  margin: 0 0;
  box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19)
   @media only screen and (max-width: 650px) {
       font-size: 3em;
    }
`;

const PlacesListStylized = styled.div`
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
