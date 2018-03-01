const sum = function (x) {
    return function (y) {
            return x + y ;
    }

}

console.log(sum(1)(6));




function sum1(a) {
    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }
    f.inspect = function() {
        return currentSum;
    };

    return f;
}

console.log(sum1(1)(2));
