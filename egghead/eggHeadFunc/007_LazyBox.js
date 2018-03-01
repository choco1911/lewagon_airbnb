const Box = x =>
({
    map: f => Box(f(x)),         // return anonimous object
    fold: f => f(x),             // our function that modify and prints last value of x
    inspect: () => `Box(${x})`  // inspect - build-in helps console.log to print out string instead whole object |  map: [Function: map], fold: [Function: fold] }
})


const LazyBox = g =>
({
    map: f => LazyBox(() => f(g())),
    fold: f => f(g())
})

const result = LazyBox(() => ' 64 ')
    .map(s => s.trim())
    .map(r => new Number(r))
    .map(i => i + 1)
    .map(i => String.fromCharCode(i))
    .fold(c => c.toLowerCase())

console.log(result)
