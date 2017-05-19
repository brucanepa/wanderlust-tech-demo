
const invalidIndex = (array, index) => {
	return index >= array.length || index < 0;
}

export const swapArrayPosition = (array, fromIndex, toIndex) => {
	const result = array.slice();

	const absDif = Math.abs(fromIndex - toIndex);
	if (absDif !== 1 || invalidIndex(result, fromIndex) || invalidIndex(result, toIndex)) return result;

	result.splice(toIndex, 0, result.splice(fromIndex, 1)[0]);
	return result;
};

export const removeArrayElement = (array, index) => {
	const result = array.slice();

	if (invalidIndex(result, index)) return result;

	result.splice(index, 1)
	return result;
};
