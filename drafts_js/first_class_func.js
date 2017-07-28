
// common style

function not(f) {

    return function(x){
        return f(x);
    };
}

const retX = function(x) {
    return x + 1;
};

const odd = not(retX);

console.log(odd(1));


// arrow style

const not2 = f => x => f(x) ;

const odd2 = not2(retX);

console.log(odd2(1) + 1);
