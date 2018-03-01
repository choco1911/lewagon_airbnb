class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  doNotRepeate(retInt) {
    return new Enumerable(retInt);
  }

  select(fn) {
    // BEGIN (write your solution here)
    const selected = this.collection.map(fn);
    return this.doNotRepeate(selected);
    // END
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
    const sorted = this.collection.slice().sort(comparator);
    return this.doNotRepeate(sorted);
  // END
  }

  where(fn) {
    const filtered = this.collection.filter(fn);
    return this.doNotRepeate(filtered);
  }

  toArray() {
    return this.collection;
  }
}

export default Enumerable;
