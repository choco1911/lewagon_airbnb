// const a = ['a', 'b', 'c', 1 , 2 , 3];
 
//let nums = new Array();

//const redd = a.reduce((acc, item) => {
//       if ( typeof item === 'number' ) {
//           return  acc.push(item);
//        }
//}, nums );
//console.log(redd);

//let nums = a.reduce((acc, value) => typeof value === 'number' ? acc.push(value) : acc, []);

//console.log(nums.length);


//const uniq = (arr) => arr.reduce((acc, value) => acc.includes(value) ? acc : acc.concat(value) , []);

//console.log(uniq([2, 1, 2, 3]));




const numbers = [ 1 , 2 , 3];

const sum = numbers.reduce(
     (acc, value) => value > 1 ? acc.concat(value) : acc, [] 
);

console.log(sum);


