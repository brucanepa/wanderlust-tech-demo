import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import AddDestinationContainer from '../destinations/AddDestinationContainer';
import styled from 'styled-components';

const Place = ({id, name, match}) => (
	<Link to={ `/places/${id}` }>
    <ResponsiveGallery>
      <Gallery>
        <Image/>
        <ImageFooter>{name}</ImageFooter>
        <AddDestinationContainer placeId={ id } name={name}/> 
      </Gallery>
    </ResponsiveGallery>
  </Link>
);

export default Place;

Place.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	match: PropTypes.any
};


const Gallery = styled.div`
  box-sizing: border-box;
  border: 1px solid #ccc;
  box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
  &:hover {
     border: 1px solid #777;
  }
`
const Image = styled.div` {
  box-sizing: border-box;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-image:url(${({ image }) => image ? image : 'https://a0.muscache.com/airbnb/guidebook/v1_san_francisco_carousel@2x.jpg'});
`

const ImageFooter = styled.div`
  padding-top: 8px;
  text-align: center;
  box-sizing: border-box;
  float: left;
  text-align: center;
  width: 83%;
  font-size: 25px;
`
const ResponsiveGallery = styled.div`
    float: left;
    width: 100%;
    box-sizing: border-box;
    transition: 0.8s;
    z-index: 1;
  
    @media only screen and (min-width: 768px) {
       width: 49%;
    }

    @media only screen and (min-width: 1000px) {
      width: 33%;
    }
`