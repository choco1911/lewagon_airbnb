var objA = {
    prop1: 'value1',
    prop2: 'value2',
    prop4: {
        subProp1: 'sub value1',
        subProp2: {
            subSubProp1: 'sub sub value1',
    //        subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
        }
    },
    prop5: 1000,
    prop6: new Date(2016, 2, 10)
};

var objB = {
    prop5: 1000,
    prop3: 'value3',
    prop1: 'value1',
    prop2: 'value2',
    prop6: new Date('2016/03/10'),
    prop4: {
        subProp2: {
            subSubProp1: 'sub sub value1',
     //       subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
        },
        subProp1: 'sub value1'
    }
};

const ifIsEqual = (obj1, obj2) => {
    Object.keys(obj1).map(
        x => {
            if (obj1[x] instanceof Array && obj2[x] instanceof Array) {

            } else if (obj1[x] instanceof Object && obj2[x] instanceof Object) {
                //console.log(obj1[x] , 'is an object');
                //console.log(obj2[x] , 'is an object');
                ifIsEqual(obj1[x], obj2[x]);

            } else {
                console.log(obj1[x] , obj2[x]);
            }
            //console.log(obj1[x] === obj2[x]);
        }
    );

}

console.log(ifIsEqual(objA, objB));



/*
console.log(objA.prop4 instanceof Object) ;
//console.log(objB.prop4.subProp2.subSubProp2 instanceof Array) ;

objKeys = Object.keys(objA);
console.log(objKeys);

const ifIsEqual = (obj1, obj2) => {
    Object.keys(obj1).map(
        x => console.log(obj1.x === obj2.x)
    );

}

console.log(ifIsEqual(objA, objB));

*/
/*
const a1 = objA.prop4.subProp2.subSubProp1;
const b1 = objB.prop4.subProp2.subSubProp1;
console.log(a1 === b1) ;
*/
/*
const a1 = objA.prop6;
const b1 = objB.prop6;
console.log(a1 === b1) ;
console.log(objA.prop6 === objB.prop6) ;
console.log(typeof a1 === 'string') ;
console.log(b1) ;
*/
console.log(objA.prop6.toString() === objB.prop6.toString()) ;
console.log(objA.prop6.toString()) ;
console.log(objB.prop6.toString()) ;
console.log(typeof objA.prop6 === 'string') ;
