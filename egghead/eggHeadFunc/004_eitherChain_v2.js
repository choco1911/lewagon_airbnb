const Right = x =>
({
    chain: f => f(x),
    map: f => Right(f(x)),
    fold: (f,g) => g(x),
    inspect: () => `Right(${x})`
})

const Left = x =>
({
    chain: f => Left(x),
    map: f => Left(x),
    fold: (f,g) => f(x),
    inspect: () => `Left(${x})`

})

const tryCatch = f => {
    try {
        return Right(f())
    } catch(e) {
        return Left(e)
    }
}

const fs = require('fs')
/*
const getPort = () => {
    try {
         const str = fs.readFileSync('config.json')
         const config = JSON.parse(str)
         return config.port
    } catch(e){
        return 3000
    }
}
*/

const getPort = () =>
    tryCatch(() => fs.readFileSync('config.json'))
    // This solution does catch empty file error
    //.map(c => JSON.parse(c))
    .chain(c => tryCatch(() => JSON.parse(c)) )   // if c - empty, we get 'unexpected JSON input' - error
    //.fold(e => '3000', // if error - return 3000
    .fold(e => e + ' ---> ' + '3000',
          r => r.port)

const result = getPort()

console.log(result)
