import React from 'react';

const PlaceRating = ({ ratesCount, sumOfRates }) => (
  <div>
	Rating: {ratesCount > 0 ? (sumOfRates / ratesCount) : 0}
	</div>
);

export default PlaceRating;
