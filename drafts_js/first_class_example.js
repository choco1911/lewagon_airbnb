

function not(f) {

    return function(){
        let result = f.apply(this, arguments);   // special word that determine any number of arguments
            return !result;
    };
}


const even = function(x) {
    return x % 2 === 0;
};

const odd = not(even);

console.log('first example:');
console.log([1, 1, 3, 5, 5 ].every(odd));


//////////////////////////////////////////

function minus(f) {

    return function(){
        let result = f.apply(this, arguments) - 2;   // arguments  - is special word that determine any number of arguments
            return result;
    };
}


const mult = function(x) {
    return x * 2 ;
};

const res = minus(mult);

console.log('second example:');
console.log([1, 1, 3, 5, 5 ].map(res));


