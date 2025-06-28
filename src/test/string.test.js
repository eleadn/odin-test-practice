const { capitalize, reverseString } = require("../string/string");

describe("String test", () => {
	describe("Capitalize", () => {
		it("Already capitalized", () => {
			expect(capitalize("Hello")).toBe("Hello");
		});

		it("Not capitalized", () => {
			expect(capitalize("hello")).toBe("Hello");
		});

		it("Not capitalized (weird)", () => {
			expect(capitalize("hElLo")).toBe("HElLo");
		});
	});

	describe("Reverse string", () => {
		it("Palindrome", () => {
			expect(reverseString("kayak")).toBe("kayak");
		});

		it("Sentence", () => {
			expect(reverseString("Once upon a time")).toBe("emit a nopu ecnO");
		});
	});
});
