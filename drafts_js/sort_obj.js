

const cars = [
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
];

// cars => cars.year
// coll.orderBy(car => car.year, 'desc')

const ccc = car => car.year;

//console.log(ccc);

const aaa = f => (a,b) => {
  a = f(a);
  b = f(b);
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1; 
  }
  return 0;
}


const bbb = cars.sort(aaa(ccc));

console.log(bbb);

const desc = sel => (a,b) => (sel(a) < sel(b)) ? 1 : ((sel(b) <  sel(a)) ? -1 : 0) ;
const xxx = cars.sort(desc(ccc));
console.log();
console.log(xxx);


