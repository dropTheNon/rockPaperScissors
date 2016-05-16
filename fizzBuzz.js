var x;
var result;
var fizzBuzz = function(x) {
    if (x%3 === 0 && x%5 === 0) {
        result = "fizzbuzz";
    } else if (x%3 === 0) {
        result = "fizz";
    } else if (x%5 === 0) {
        result = "buzz";
    } else {
        result = x;
    }
};
fizzBuzz();
console.log(result);