// const aaa = (num) => num * num;
// const bbb = {
  // brand: 'ferrari',
  // model: 'F60'
// };
//
// equal = typeof aaa === 'function';
// notEqual = typeof bbb === 'function';
// objKeys = Object.keys(bbb);
//
// console.log(equal);
// console.log(notEqual);
// console.log(objKeys);
//
//
// sss = checkType({ brand: 'kia' }, car => car.year < 2013)
// console.log(sss);

const cars = [
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
];
//coll = new Enumerable(cars);


const objOrItem = { brand: 'kia', model: 'sorento' };
// const ccc = cars.filter((objOrItem, itemCar) => Object.keys(objOrItem).every(objKey => {
  // console.log(objOrItem.objKey);
  // console.log(itemCar.objKey);
  // const aaa = objOrItem.objKey === itemCar.objKey;
  // console.log(aaa);
// } ));
// console.log(ccc);

console.log(Object.keys(objOrItem).map(item => objOrItem[item]));
