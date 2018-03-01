class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  // BEGIN (write your solution here)
  where(...Args) {
    //  return this.build(coll => coll.filter(fn));
      return Args.reduce((acc, objOrItem) => {
        if (typeof objOrItem === 'function') {
                return acc.concat(coll => coll.filter(objOrItem));
          }

          // coll => coll.filter(car => car.brand === 'rio')
          // Object.keys({ brand: 'kia', model: 'sorento' }) --> ['brand', 'model', 'year']
          // objOrItem.['brand'] === 'kia'
          // coll.filter() --> coll.item = { brand: 'bmw', model: 'm5', year: 2014 }
          // coll.filter(car => objOrItem.keyItem === car.keyItem)
          // coll.filter(car => Object.keys(objOrItem).every(objKey => objOrItem.objKey === car.objKey))

           return acc.concat(coll.filter(car => Object.keys(objOrItem).every(objKey => objOrItem.objKey === car.objKey)));
      }, []);
  }
  // END

  get length() {
    return this.toArray().length;
  }

  toArray1() {
    if (!this.memo) {
      this.memo = this.operations.reduce((acc, func) => func(acc), this.collection);
    }

    return this.memo;
  }
}

//export default Enumerable;


const cars = [
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
];
coll = new Enumerable(cars);

// const result3 = coll.where({ brand: 'kia', model: 'sorento' });
const result3 = coll.where(car => car.year < 2013);
console.log(result3.toArray());
