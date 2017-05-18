import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { texts } from '../constants';
import { notFoundImage } from '../constants';

const NotFound = () => (
  <div> 
    {texts.placeNotFound}
    <img src={notFoundImage}  width="200px" height="200px"></img>
  </div>
);

export default NotFound;
