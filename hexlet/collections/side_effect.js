const numbers = [ 3, 6, 4, 8, 5, 9, 7, 1 ]

const doSort = (coll) => coll.sort(); // sort works inplace


// here we pass numbers to the function - and it passes by reference
doSort(numbers);

// side effect
//as we pass reference to the array
console.log(numbers); // we will get sorted array [ 1, 3, 4, 5, 6, 7, 8, 9 ]
