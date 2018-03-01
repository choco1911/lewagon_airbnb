const animals = ['DogName', 'Cat Name'];
const [myDog, myCat] = animals;


console.log(myDog);
console.log(myCat);

// Example #2
const x = [1, 2, 3, 4, 5];
const [y, z] = x;

console.log(y);
console.log(z);

// Rest
console.log('>>> Rest');

const [a, b, ...rest] = [1, 2, 3, 4, 5];

console.log(a);
console.log(b);
console.log(rest);


// Objects
console.log('>>> Objects');

const {c, d} = {c: 11, d: 22 };
console.log(c);
console.log(d);


// default values
console.log('>>> default values');

const [abc = 8, def = 212] = [111];
console.log(abc);
console.log(def);

// chaning values of variable without using third variable
console.log('>>> chaning values of variable without using third variable');

let ddd = 555;
let fff = 777;

console.log(fff);
console.log(ddd);

[fff, ddd] =[ddd, fff];

console.log(fff);
console.log(ddd);


// return of function
console.log('>>> return of function');

const fArr = () => [121, 212];

const [ccc, xxx] = fArr();
console.log(ccc);
console.log(xxx);


// Cool case using destructing assignment in function definition
console.log('>>> using destructing assignment in function definition');

const myAnimals = [
  { age: 5, type: 'cat'},
  { age: 10, type: 'dog'}
];

// In the filter function we're extracting 'age' property and pass it to the compare function where we're comparing age of animals
const result = myAnimals.filter(({ age }) => age > 7);

console.log(result);


// Compound object
console.log('>>> Compound object');

const metadata = {
    title: "Scratchpad",
    translations: [
      { locale: "de", title: "JavaScript-Umgebung"}
    ],
    url: "/en-US/docs/Tools/Scratchpad"
};

// extracting values
const { title: englishTitle,
        translations: [{ title: localeTitle}]
} = metadata;

console.log(englishTitle);
console.log(localeTitle);

console.log('>>> test');


const frompairs = (list) => {
  return list.reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
   }, {});
 };

const result123 = frompairs([['fred', 30], ['barney', 40]]);
console.log(result123);


const xyz = {};
console.log(xyz.hasOwnProperty(1));

//

console.log('>>> test this shit');
const findOdd = (nums) => {
    const uniq = new Set(nums);
    const getNums = nums.reduce((acc, item) => {
      if (!acc.hasOwnProperty(item)) {
        acc[item] = 1;
      } else {
        acc[item] +=1;
      }
      return acc;
    }, {});

  return Array.from(uniq).reduce((acc, val) => {
    const compare = getNums[val];
    if (compare % 2 !== 0) {
      //console.log(compare);
      //console.log(val);
      acc = val ;
    }
    return acc;
  }, 0 );
}

const numbers = [1, 2, 4, 2, 4, 1, 5, 3, 3];

const result1 = findOdd(numbers);
console.log(result1);

const aaa = (arr) => {
  return arr.reduce((acc, num) => acc ^ num, 0);
}

console.log(aaa(numbers));
