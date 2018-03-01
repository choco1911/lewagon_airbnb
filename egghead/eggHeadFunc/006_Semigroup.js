
// my solution
/*
const Sum = x =>
({
    fold: () => x,
    concat: o => x + o.fold()
})
*/

/* example 2

const Sum = x =>
({
    //x: () => x,
    //concat: o => x + o.x()
    //x: x, // if key and value same variable
    x,
    concat: o => x + o.x
})

*/
// understanding what happend
/*
const Sum = x =>
({
    x,
    concat: ({x: y}) => {
        console.log(y);
        return Sum(x+y)
    },
    inspect: () =>
        `Sum(${x})`
})
*/

// working example
/*
const Sum = x =>
({
    x,
    concat: ({x: y}) =>
        Sum(x+y),
    inspect: () =>
       `Sum(${x})`
})


const res = Sum(1).concat(Sum(2))

console.log(res)
*/

// true && false // false
// true && true // true
/*
const All = x =>
({
    x,
    concat: ({x: y}) =>
        All(x && y),
    inspect: () =>
       `All(${x})`
})

const res = All(true).concat(All(false))

console.log(res)

*/

// Throw away all other values
const First = x =>
({
    x,
    concat: _ =>
        First(x),
    inspect: () =>
       `First(${x})`
})

const res = First("blah").concat(First("ice cream")).concat(First("meta-programming"))

console.log(res)
