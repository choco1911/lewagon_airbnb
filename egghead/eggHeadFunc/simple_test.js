const Box = x =>
    ({
        compose: f => Box(f(x)),  // here i remember x to pass it next interface
        commit: f => f(x)
    })


const doModify = xyz =>
    Box(xyz)
    .compose(y => y * y)
    .commit(z => z * z )

const result = doModify(4)

console.log(result)
