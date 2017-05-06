import React from 'react';
import { Route, Link } from 'react-router-dom';
import Place from './Place';

const Places = ({ match }) => (
    <div>
	    <h2>Places</h2>
	    <ul>
	        <Place match={match}/>
	        <Place match={match}/>
   		</ul>	
   	</div>
);

export default Places;
