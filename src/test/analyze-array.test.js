const analyzeArray = require("../analyze-array/analyze-array");

describe("Analyze array tests", () => {
	it("Single element", () => {
		expect(analyzeArray([4])).toMatchObject({
			average: 4,
			min: 4,
			max: 4,
			length: 1,
		});
	});

	it("Array", () => {
		expect(analyzeArray([1, 8, 4, 3, 2, 6])).toMatchObject({
			average: 4,
			min: 1,
			max: 8,
			length: 6,
		});
	});
});
