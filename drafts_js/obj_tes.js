


const cars = [
      { brand: 'bmw', model: 'm5', year: 2014 },
      { brand: 'bmw', model: 'm4', year: 2013 },
      { brand: 'kia', model: 'sorento', year: 2014 },
      { brand: 'kia', model: 'rio', year: 2010 },
      { brand: 'kia', model: 'sportage', year: 2012 },
];

// const asc = cars.map(car => car.year).sort();
// const desc = cars.map(car => car.year).sort().reverse();

// console.log(asc);
// console.log(desc);

//.where(car => car.brand === 'kia')
//car.brand === test.brand
//[ 'brand', 'model' ]

const where = (...theObj) => {
    //const carFun = theObj.filter(element => typeof element === 'function');

//    console.log(carFun);


    let compare = theObj.filter(f => f !== 'function').shift();  // { brand: ... model: ... } 
    // let kkey = Object.keys(compare).shift();                      // [ brand, model ]
     let kkeys = Object.keys(compare);                      // [ brand, model ]

//    let result;
//    const ddd = (kkeys) => {
//        const kkey = kkeys.shift();
//        
//        if (!kkey) { 
//            return result;
//        } 
//
//        result = cars.filter(car => car[kkey] === compare[kkey] && car[kkey]);
//
//        return ddd(kkeys);
//
//    
//    }
//     //   return cars.filter(car => car[kkey] === compare[kkey] && car[kkey]);
//
//    // return ddd(kkeys);
    

    // return kkeys.reduce((acc, kkey) => cars.filter(car => car[kkey] === compare[kkey] && car[kkey]), 0);
    return  cars.filter(car => kkeys.every(kkey => car[kkey] === compare[kkey]));



}

const result = where({ brand: 'kia', model: 'sorento' });
//const result = where(car => car.brand === 'kia');

console.log(result);
