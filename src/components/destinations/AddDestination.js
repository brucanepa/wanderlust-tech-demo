import React from 'react';

const AddDestination = ({onClick, nextDestinationPosition}) => (
	<div>
		<button type="button" onClick={() => {onClick(nextDestinationPosition)}}>Agregar</button>
	</div>
);

export default AddDestination;
