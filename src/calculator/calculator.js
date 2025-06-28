class Calculator {
	static add(a, b) {
		return a + b;
	}

	static substract(a, b) {
		return a - b;
	}

	static divide(a, b) {
		if (b === 0) {
			throw new Error("Trying to divide by zero");
		}
		return a / b;
	}

	static multiply(a, b) {
		return a * b;
	}
}

module.exports = Calculator;
