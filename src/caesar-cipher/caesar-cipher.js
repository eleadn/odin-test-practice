function isLowerCase(char) {
	return char >= "a" && char <= "z";
}

function isLetter(char) {
	return (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");
}

function caesarAddToChar(char, shiftFactor) {
	let charCode = char.charCodeAt();
	let shiftBy = shiftFactor;
	const zCharCode = isLowerCase(char) ? "z".charCodeAt() : "Z".charCodeAt();
	const aCharCode = isLowerCase(char) ? "a".charCodeAt() : "A".charCodeAt();

	if (charCode + shiftFactor > zCharCode) {
		shiftBy = shiftFactor - (zCharCode + 1 - charCode);
		charCode = aCharCode;
	} else if (charCode + shiftFactor < aCharCode) {
		shiftBy = shiftFactor + (charCode + 1 - aCharCode);
		charCode = zCharCode;
	}

	return String.fromCharCode(charCode + shiftBy);
}

function caesarCipher(string, shiftFactor) {
	return string
		.split("")
		.map((value) =>
			isLetter(value) ? caesarAddToChar(value, shiftFactor) : value
		)
		.join("");
}

module.exports = caesarCipher;
