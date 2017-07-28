const myFunc = (a, b) => {
    if (a > b ) {
        return a;
    } else {
        return b;
    }
}

console.log(myFunc(5,6));

const f = x => x;

const myFunc1 = (a, b) => {
    a > b ? f(a) : f(b);
}

console.log(myFunc(5,6));

const myFunc3 = (a, b) => {
    a > b ? ((a) => a ) : ((b) => b);
}

console.log(myFunc(5,6));


// Does't work because return is a statment
// const myFunc4 = (a, b) => {
//    a > b ? return a : return b;
//}

//console.log(myFunc4(4,2));


