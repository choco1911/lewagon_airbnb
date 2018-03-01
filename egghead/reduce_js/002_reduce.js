var votes = [
    "angular",
    "angular",
    "react",
    "react",
    "react",
    "angular",
    "ember",
    "angular",
    "vanilla"
];

var initialValue = {};
/*
var reducer = function(tally, vote) { // tally is an accumulator here, vote is an item of array
        if(!tally[vote]) {
            tally[vote] = 1;
        } else {
            tally[vote] = tally[vote] + 1;
        }
        return tally;
};

*/


var reducer = function(tally, vote) {
    tally[vote] = (tally[vote] || 0) + 1;
    return tally;
}

var result = votes.reduce(reducer, initialValue);

console.log(result);
