import React from 'react';
import styled from 'styled-components';
import { defaultImage } from '../../constants';

const PlaceImages = ({images}) => (
	<PlaceImagesStylized>
		{images && images.map(image => 
			<ResponsiveGallery>
				<Gallery>
				  <Image image={ image || defaultImage } />
				</Gallery>
			</ResponsiveGallery> 
		)}
	</PlaceImagesStylized>
);

export default PlaceImages;

const PlaceImagesStylized = styled.div`
    margin-left: 1%;
`; 

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
`