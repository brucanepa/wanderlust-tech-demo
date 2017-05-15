import React from 'react';

const AddDestination = ({onClick}) => (
	<div>
		<button type="button" onClick={(e) => onClick(e)}>Agregar</button>
	</div>
);

export default AddDestination;
