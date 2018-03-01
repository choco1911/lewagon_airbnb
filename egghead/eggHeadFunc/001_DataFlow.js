// 
// example #1
// каждая строчка в функции преставляет отдельное действие
/*
const nextCharForNumberString = str => {
    const trimmed = str.trim()
    const number = parseInt(trimmed)
    const nextNumber = number + 1
    return String.fromCharCode(nextNumber)
}
*/

// example #2
// можно переписать в следующий вид, но действия
// страновятся не очень понятными
/*
const nextCharForNumberString = str =>
    String.fromCharCode(parseInt(str.trim()) + 1)
*/

// example #3
// использования массива как обертки, для формирования композиции
/*
const nextCharForNumberString = str =>
    [str]
    .map(s => s.trim())
    .map(s => parseInt(s))
    .map(i => i + 1)
    .map(i => String.fromCharCode(i))
*/

// example #4
/*
const Box = x =>
({
    map: f => Box(f(x)),
    inspect: () => `Box(${x})`
})
const nextCharForNumberString = str =>
    Box(str)
    .map(s => s.trim())
    .map(s => parseInt(s))
    .map(i => i + 1)
    .map(i => String.fromCharCode(i))


const result = nextCharForNumberString(' 64 ')

console.log(result)

// inspect build-in - google
console.log({
    inspect: function() {
        return 123;
    },
    toString: function(){
        return 'foo';
    }
})

*/

// example #5
/*
const Box = x =>
({
    map: f => Box(f(x)),
    inspect: () => `Box(${x})`
})

const nextCharForNumberString = str =>
    Box(str)
    .map(s => s.trim())
    .map(r => new Number(r))
    .map(i => i + 1)
    .map(i => String.fromCharCode(i))
    .map(c => c.toLowerCase())

const result = nextCharForNumberString(' 64 ')

console.log(result)
*/

// example # 6
const Box = x =>
({
    map: f => Box(f(x)),         // return anonimous object
    fold: f => f(x),             // our function that modify and prints last value of x
    xxx: () => x
    //inspect: () => `Box(${x})`  // inspect - build-in helps console.log to print out string instead whole object |  map: [Function: map], fold: [Function: fold] }
})

const nextCharForNumberString = str =>
    Box(str)
    .map(s => s.trim())
    .map(r => new Number(r))
    .map(i => i + 1)
    .map(i => String.fromCharCode(i))
    //.fold(c => c.toLowerCase())
    .xxx()

const result = nextCharForNumberString(' 64 ')

console.log(result)

// Quiz
// inspect method - to console.log() ?
// identity functor ?
