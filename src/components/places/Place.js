import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import AddDestinationContainer from '../destinations/AddDestinationContainer';
import styled from 'styled-components';

const Place = ({id, name, match}) => (


	<Link to={ `/places/${id}` }>
 		
        <Responsive>
          <Gallery>
              <Image/>
              <Description>{name}</Description>
              <AddDestinationContainer placeId={ id } name={name}/> 
          </Gallery>
        </Responsive>
	  
    </Link>
);

export default Place;

Place.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	match: PropTypes.any
};


const Gallery = styled.div`
    border: 1px solid #ccc;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19)
    box-sizing: border-box;
    &:hover {
       border: 1px solid #777;
    }
`

const Image = styled.div` {
  height: 250px;
  box-sizing: border-box;
  background-image:url(${({ image }) => image ? image : 'https://a0.muscache.com/airbnb/guidebook/v1_san_francisco_carousel@2x.jpg'});
`

const Description = styled.div`
    padding: 15px;
    text-align: center;
    box-sizing: border-box;
`

const Responsive = styled.div`
    padding: 0 10px;
    float: left;
    width: 30%;
    min-width: 500px;
    box-sizing: border-box;
    margin-top: 10px;
    margin-bottom: 10px;
    transition: 0.8s;

    @media only screen and (max-width: 1350px){
        width: 60%;
    }

     
    @media only screen and (max-width: 750px){
        max-width: 350px;
        min-width: 350px;
    }



    @media only screen and (max-width: 650px){
      padding: 0 0;
              max-width: 500px;
        min-width: 350px;
    }
     

    @media only screen and (max-width: 450x){
      padding: 0 0;
      max-width: 350px;
      min-width: 350px;
    }  
`

/*	<li>
   <Link to={ `/places/${id}` }> 
    Place: { name }
   </Link>
   <AddDestinationContainer placeId={ id } name={name}/>
 </li>*/