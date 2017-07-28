
const a = ['a', 'b', 'c', 1 , 2 , 3];

const b = a.filter(a => typeof a === 'number').shift();

if (b) {
    console.log(b);
}

let nums = new Array();
//const nums = [ ];
//var nums = [];

const redd = a.reduce((acc, item) => {
       // console.log(typeof acc);
 //       if ( typeof item === 'number' ) {
          return  acc.push(item);
//        }
}, nums );

//console.log(redd);

console.log([].push('aaa'));
