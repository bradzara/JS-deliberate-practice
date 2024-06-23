var numbers = [0, 8, 4, 0, 3, 0];

var zeros = numbers.filter(function(number) {
	return number === 0;
});

console.log(zeros.length);