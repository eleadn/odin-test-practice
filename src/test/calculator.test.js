const Calculator = require("../calculator/calculator");

describe("Calculator tests", () => {
	describe("Add", () => {
		it("Positive numbers", () => {
			expect(Calculator.add(10, 5)).toBe(15);
		});

		it("Negative numbers", () => {
			expect(Calculator.add(-10, -5)).toBe(-15);
		});

		it("Negative and positive numbers", () => {
			expect(Calculator.add(-10, 5)).toBe(-5);
		});
	});

	describe("Substract", () => {
		it("Positive numbers", () => {
			expect(Calculator.substract(10, 5)).toBe(5);
		});

		it("Negative numbers", () => {
			expect(Calculator.substract(-10, -5)).toBe(-5);
		});

		it("Negative and positive numbers", () => {
			expect(Calculator.substract(-10, 5)).toBe(-15);
		});
	});

	describe("Divide", () => {
		it("Positive numbers", () => {
			expect(Calculator.divide(10, 5)).toBe(2);
		});

		it("Negative numbers", () => {
			expect(Calculator.divide(-10, -5)).toBe(2);
		});

		it("Negative and positive numbers", () => {
			expect(Calculator.divide(-10, 5)).toBe(-2);
		});

		it("Dividing by zero", () => {
			expect(() => Calculator.divide(1, 0)).toThrow(Error);
		});
	});

	describe("Multiply", () => {
		it("Positive numbers", () => {
			expect(Calculator.multiply(10, 5)).toBe(50);
		});

		it("Negative numbers", () => {
			expect(Calculator.multiply(-10, -5)).toBe(50);
		});

		it("Negative and positive numbers", () => {
			expect(Calculator.multiply(-10, 5)).toBe(-50);
		});

		it("Multiply by zero", () => {
			expect(Calculator.multiply(354354375421124, 0)).toBe(0);
		});
	});
});
