function capitalize(string) {
	return string
		.split("")
		.map((v, i) => (i === 0 ? v.toUpperCase() : v))
		.join("");
}

function reverseString(string) {
	return string.split("").reverse().join("");
}

module.exports = { capitalize, reverseString };
