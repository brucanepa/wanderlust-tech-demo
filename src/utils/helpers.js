
export const generateId = () => Math.floor(Math.random()*1000000)

const invalidIndex = (array, index) => {
	return index >= array.length || index < 0; 
}

export const swapArrayPosition = (array, fromIndex, toIndex) => {
	const result = array.slice();
	
	const absDif = Math.abs(fromIndex - toIndex);
	if(absDif !== 1 || invalidIndex(result, fromIndex) || invalidIndex(result, toIndex)) return result;

    result.splice(toIndex, 0, result.splice(fromIndex, 1)[0]);
	return result;
};

export const findIndexOfDestination = (array, id) => {
  return array.map((place) => { return place.id}).indexOf(id);
};

export const removeArrayElement = (array, index) => {
	const result = array.slice();

	if (invalidIndex(result, index)) return result;

	result.splice(index, 1)
	return result;
};

export const getRegionTitle = (name, placesCount) => {
	if (!name || (!placesCount && placesCount !== 0)) return '';
  const title = name.toUpperCase() + ' (' + placesCount + ' place';
  return (placesCount === 1 ? title : title + 's') + ')';
};