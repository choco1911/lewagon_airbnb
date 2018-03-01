 /*
 let dragon =
     name =>
         size =>
             element =>
                 name + 'is a ' +
                 size + ' dragon that breathes ' +
                 element + '!';
*/

// console.log(dragon('fluffykins')('tiny')('linghtning'));

// making non curry function curruable
/*
 const _ = require('lodash');

 let dragon = (name, size, element) =>
     name + 'is a ' +
     size + ' dragon that breathes ' +
     element + '!';

 dragon = _.curry(dragon);

 let fluffykinsDragon = dragon('fluffykins');
 let tinyDragon = fluffykinsDragon('tiny');

 console.log(tinyDragon('linghtning'));
*/

/*
 let dragons = [
     { name: 'fluffykins', element: 'lightning' },
     { name: 'noomi' , element: 'lightning' },
     { name: 'karo' , element: 'fire' },
     { name: 'doomer' , element: 'timewarp' }
 ]

 let hasElement =
     (element, obj) => obj.element === element ;

 let lightningDragons =
     dragons.filter(x => hasElement('lightning', x));
*/


// using lodash

const _ = require('lodash');

let dragons = [
        { name: 'fluffykins', element: 'lightning' },
        { name: 'noomi' , element: 'lightning' },
        { name: 'karo' , element: 'fire' },
        { name: 'doomer' , element: 'timewarp' }
    ]
// _.curry - get first argument and converts it in to new function
// which wait for second argument

let hasElement =
    _.curry((elem, obj) => obj.element === elem) ;

let lightningDragons =
        dragons.filter(hasElement('lightning'));


console.log(lightningDragons);
