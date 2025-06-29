function analyzeArray(array) {
	const length = array.length;
	const average = array.reduce((prev, curr) => prev + curr) / length;
	const min = array.reduce((prev, curr) => (prev < curr ? prev : curr));
	const max = array.reduce((prev, curr) => (prev > curr ? prev : curr));

	return {
		average: average,
		min: min,
		max: max,
		length: array.length,
	};
}

module.exports = analyzeArray;
