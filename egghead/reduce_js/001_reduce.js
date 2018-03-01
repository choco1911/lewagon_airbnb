var data = [15, 1, 2, 3];


var reducer = function(acc, item) {
    return acc + item;
}

var initValue = 0;

var total = data.reduce(reducer, initValue); // initValue - start value off accumulator

console.log("The sum is", total);
