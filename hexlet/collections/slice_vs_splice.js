
const sample = ['a', 'b', 'c', 'd'];

// const result = sample.slice(0,-1); // ['a', 'b' , 'c']
//const result = sample.slice(0,1); // ['a']
//const result = sample.splice(0,1); // return deleted item in array ['a']
const result = sample.splice(1,2); // return deleted item in array ['a']



console.log(result);
