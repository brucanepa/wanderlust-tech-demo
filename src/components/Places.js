import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Place from './Place';

const Places = ({ match }) => (
    <div>
	    <h2>Places</h2>
	    <ul>
			<li>
	        	<Link to={`${match.url}/placeNumberOne`}>
	          		Hey look at this place
	        	</Link>
	        </li>
	        <li>
	        	<Link to={`${match.url}/placeNumberTwo`}>
	          		Hey look at this other place
	        	</Link>
	        </li>
   		</ul>
   		
   		<Route path={`${match.url}/:placeId`} component={Place}/>
	    <Route exact path={match.url} render={() => (
	      <h3>Please select a topic.</h3>
	    )}/>
   		
   	</div>
);


export default Places;
