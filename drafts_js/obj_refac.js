


const cars = [
      { brand: 'bmw', model: 'm5', year: 2014 },
      { brand: 'bmw', model: 'm4', year: 2013 },
      { brand: 'kia', model: 'sorento', year: 2014 },
      { brand: 'kia', model: 'rio', year: 2010 },
      { brand: 'kia', model: 'sportage', year: 2012 },
];

const where = (...theObj) => {



    //let compare = theObj.filter(f => f !== 'function').shift();  // { brand: ... model: ... } 
    let compare = theObj.shift();  // { brand: ... model: ... } 
    console.log(compare);
    let compKeys = Object.keys(compare);                      // [ brand, model ]
    

    return  cars.filter(car => compKeys.every(compKey => car[compKey] === compare[compKey]));


}

const result = where({ brand: 'kia', model: 'sorento' });

console.log(result);
