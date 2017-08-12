import React from 'react';
import styled from 'styled-components';
import { defaultImage, wanderLustVR } from '../../../constants';

const PlaceImages = ({images, vrImage}) => (
	<div>
    {vrImage && 
      <ResponsiveGallery>
        <Gallery>
          <ContainerVR src={wanderLustVR + vrImage} width="300" height="300" frameborder="0" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"/>
        </Gallery>
      </ResponsiveGallery> 
    }
		{images && images.map(image => 
			<ResponsiveGallery key={image}>
				<Gallery>
				  <Image image={ image || defaultImage } />
				</Gallery>
			</ResponsiveGallery> 
		)}
	</div>
);

export default PlaceImages;

const ContainerVR = styled.iframe`
  box-sizing: border-box;
  border: none;
  height: 300px;
  width: 100%;
`
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
  background-image:url(${({ image }) => image });
`
const ResponsiveGallery = styled.div`
    float: left;
    width: 100%;
    box-sizing: border-box;
    transition: 0.8s;
`