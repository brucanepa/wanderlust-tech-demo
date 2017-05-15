import React from 'react';
import { Link } from 'react-router-dom';
import PlacesContainer from '../places/PlacesContainer';
import styled from 'styled-components';

const Region = ({match, id, name, image, placesCount}) => (
    <Link to={ `regions/${id}` }>
    <Responsive>
      <Gallery>
        <Image/>
        <Description>
          { name } (
          { placesCount })</Description>
      </Gallery>
    </Responsive>
    </Link>
);

export default Region;

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

/*

 @media only screen and (max-width: 1480px){
        width: 40%;
    }

    @media only screen and (max-width: 1300px){
        width: 50%;
    }

    @media only screen and (max-width: 810px){
        width: 50%;
    }

    @media only screen and (max-width: 450px){
      margin: 10px 0%;
         padding: 0 0;
    }
    @media only screen and (max-width: 400px){
      margin: 10px 0;
      padding: 0 0;
    }

const ImageWrap = styled.div`
  position: relative;
  height: 256px;
  width: 300px;
  background-image:url('https://a0.muscache.com/airbnb/guidebook/v1_san_francisco_carousel@2x.jpg');
`;


const ImageText = styled.p`
    font-size: 1.5em;
    text-align: center;
    position: absolute;
    min-height: 105px;
    margin: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    transition: opacity .2s;
    opacity: 0;
    color: white;
  	&:hover {
  		opacity: 1;
  	}
`;*/
