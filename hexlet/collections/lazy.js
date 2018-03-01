class Enumerable {
  // BEGIN (write your solution here)
  constructor(collection, operations) {
     this.collection = collection;
     this.operations = operations || [ ];
  }

  oper(funcColl){
    const newOps = this.operations.slice();
    newOps.push(funcColl);
    return new Enumerable(this.collection, newOps);

  }

  orderBy(fn, direction = 'asc') {
    const comparator = (a, b) => {
      const a1 = fn(a);
      const b1 = fn(b);

      const compareResult = direction === 'asc' ? 1 : -1;

      if (a1 > b1) {
        return compareResult;
      } else if (a1 < b1) {
        return -compareResult;
      }

      return 0;
    };
    //const clone = this.collection.slice();
    //clone.sort(comparator);
    return this.oper(coll => coll.slice().sort(comparator));
  // END
  }

where(fn) {
   return this.oper(coll => coll.filter(fn));
}

select(fn) {
   return this.oper(coll => coll.map(fn));
}

toArray() {
  return this.operations.reduce((acc, operFunc) => operFunc(acc), this.collection);
}

  // END
}

export default Enumerable;
