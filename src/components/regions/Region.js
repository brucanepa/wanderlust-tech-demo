import React from 'react';
import { Link } from 'react-router-dom';
import PlacesContainer from '../places/PlacesContainer';
import america from '../../america.jpg';
import styled from 'styled-components';

const Region = ({ match, id, name }) => (
	<RegionStylized>		
	    <Link to={`regions/${id}`}>
	   	  <ImageWrap>
	      	<img src={america} height="128" width="128" title={name}/>
	      	<ImageText>{name}</ImageText>
	      </ImageWrap>
	    </Link>
	</RegionStylized>
);

export default Region;

const RegionStylized = styled.li`
  float:left;
  transition: 0.3s;
  margin: 5px 5px;
`;

const ImageWrap = styled.div`
  position: relative;
  height: 128px;
  width: 128px;
`;

const ImageText = styled.p`
 	max-width: 128px;
    font-size: 1.5em;
    text-align: center;
    position: absolute;
    min-height: 105px;
    margin: 0px 0px;
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
`;