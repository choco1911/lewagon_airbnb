// Представление массива
/*
let obj1 = {
    0: 'Vasya',
    1: 'Pertya'
}
*/

let fruits = ['apple','peach','melon'];

fruits[fruits.length] = 'cherry';
fruits[fruits.length] = 'grape';

console.log(fruits);

// fruits.splice(startIndex, numberOfElementsToDelete, itemToPaste);

// delete elements
fruits.splice(1,1);

// paste elements
fruits.splice(-1,0,100,200,300,400);

// delete and paste
fruits.splice(2,1,1000);

console.log(fruits);

arr1 = ['100', '200', '300', '400'];
arr2 = [];

arr2 = arr1;

arr1.push(1,2,3);

console.log(arr1);
console.log(arr2);

console.log(arr1 === arr2);
console.log(arr1 == arr2);


test1 = ['10', '20', '30'];
test2 = [];

test2 = test1.slice();
test1.push('a', 'b', 'c');

console.log(test1);
console.log(test2);
