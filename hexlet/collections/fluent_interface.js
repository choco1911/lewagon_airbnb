class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  // BEGIN (write your solution here)
  select(fn) {
    this.collection = this.collection.map(fn);
    return this;
  }
  // END

  // BEGIN (write your solution here)
orderBy(fn) {
    const compare = (a, b) => {
      a = fn(a);
      b = fn(b);

      if (sortOrder === 'desc' ) {
        return a > b ? -1 : 1 ;
      } else {
        return a < b ? -1 : 1 ;
      }
      return 0;
    };

    this.collection.sort(compare);
    return this;
  }

  // END
  where(fn) {
    this.collection = this.collection.filter(fn);
    return this;
  }

  toArray() {
    return this.collection;
  }
}

const cars = [
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
];
coll = new Enumerable(cars);


const result = coll.orderBy(car => car.year, 'desc')
  .where(car => car.brand === 'bmw')
  //.select(car => car.model);

// return object
//const result = coll.where(car => car.brand === 'kia')
  //.where(car => car.year > 2011);

// Return filtered array with field models only
//const result = coll.where(car => car.brand === 'bmw')
  //.select(car => car.model);

// Return array field with models only
//const result = coll.select(car => car.model);

console.log(result.toArray());


// Teachers solution
// BEGIN
 //orderBy(fn, direction = 'asc') {
   //const comparator = (a, b) => {
     //const a1 = fn(a);
     //const b1 = fn(b);
//
     //const compareResult = direction === 'asc' ? 1 : -1;
//
     //if (a1 > b1) {
       //return compareResult;
     //} else if (a1 < b1) {
       //return -compareResult;
     //}
//
     //return 0;
   //};
   //this.collection.sort(comparator);
   //return this;
 //}
 // END
