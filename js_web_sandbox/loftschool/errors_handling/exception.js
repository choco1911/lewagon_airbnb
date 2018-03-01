/*
function div(a, b){
    if (b == 0) {
        console.error('Divide by null is not permitted');
    } else {
        return a / b;
    }
};
*/
/*
function div(a, b){
    // throw new Error - finished function execution and programm exits
    if (b < 0) {
        throw new Error('Divider should be greater than 0');
    }
    if (b == 0) {
        throw new Error('Divide by null is not permitted');
    }
        return a / b;
};


let res = div(10, -2);


console.log(res);
*/

function div(a, b){
    // throw new Error - finished function execution and programm exits
    if (b < 0) {
        throw new Error('Divider should be greater than 0');
    }
    if (b === 0) {
        throw new Error('Divide by null is not permitted');
    }
        return a / b;
};

try {
    let res = div(10, 0);
    console.log(res + 1000);
} catch(e) {
    console.error('WTF!!! %s', e.message);
} finally {
    console.log('This block executes: Finally');
}
