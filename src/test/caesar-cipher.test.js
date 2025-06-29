const caesarCipher = require("../caesar-cipher/caesar-cipher");

describe("Caesar cipher tests", () => {
	it("Simple string", () => {
		expect(caesarCipher("abc", 3)).toBe("def");
	});

	it("Simple string negative", () => {
		expect(caesarCipher("xyz", -3)).toBe("uvw");
	});

	it("Wrapping", () => {
		expect(caesarCipher("xyz", 3)).toBe("abc");
	});

	it("Wrapping negative", () => {
		expect(caesarCipher("abc", -3)).toBe("xyz");
	});

	it("Case preservation", () => {
		expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
	});

	it("Complex string", () => {
		expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
	});
});
