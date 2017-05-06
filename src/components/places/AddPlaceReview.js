import React from 'react';
import PlaceRating from './PlaceRating';

const AddPlaceReview = () => {
	let input;

	return (
		<div>
			<PlaceRating/>
			<form
		        onSubmit={e => {
		          e.preventDefault();
		          //if (!input.value.trim()) {
		          //  return;
		          //}
		          //dispatch(addTodo(input.value));
		          input.value = '';
		        }}
		      	>
		        <input ref={node => { input = node; }} />
		        <button type="submit">
		          Agregar
		        </button>
		    </form>
		</div>
	);
};

export default AddPlaceReview;