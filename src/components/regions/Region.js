import React from 'react';
import { Link } from 'react-router-dom';
import PlacesContainer from '../places/PlacesContainer';
import styled from 'styled-components';
import { getRegionTitle } from '../../utils/textHelper';

const Region = ({match, id, name, image, placesCount}) => (
    <Link to={ `regions/${id}` }>
    <ResponsiveGallery>
      <Gallery>
        <Image image={image}/>
        <ImageFooter>
          { getRegionTitle(name, placesCount) }</ImageFooter>
      </Gallery>
    </ResponsiveGallery>
    </Link>
);

export default Region;

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
  background-image:url(${({ image }) => image ? image : 'http://cdn.wallpapersafari.com/6/52/ied8HY.jpeg'});
`

const ImageFooter = styled.div`
  padding: 15px;
  text-align: center;
  box-sizing: border-box;
  font-size: 25px;
`
const ResponsiveGallery = styled.div`
    float: left;
    width: 100%;
    box-sizing: border-box;
    transition: 0.8s;

  
    @media only screen and (min-width: 768px) {
       width: 49%;
    }

    @media only screen and (min-width: 1000px) {
      width: 33%;
    }
`