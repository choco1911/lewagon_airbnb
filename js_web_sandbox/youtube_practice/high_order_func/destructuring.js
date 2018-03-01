var animal = {
    species: 'dog',
    weight: 23,
    sound: 'woof'
}

var { species, sound } = animal ;

console.log(species, sound);


var x = { y: 1};

x.y = animal;

console.log(x);
console.log(x.y.species);

// common use it easer to deal with option objects
 /*
 makeSound({
     species: 'dog',
     weight: 23,
     sound: 'woof'
 })
 */

/*
 function makeSound(options) {
     options.species = options.species || 'animal';
     console.log('The ' + options.species + ' says ' + options.sound + '!');
 }
*/

// destructuring make code more readable
/*
  function makeSound(options) {
       // var species = options.species || 'animal';
       // var sound = options.sound || 'animal';
       var { species, sound } = options;
       species = species || 'animal';
      console.log('The ' + species + ' says ' + sound + '!');
  }
 */

// if we call function without options, declared without = {}. Then we get error
// TypeError: Cannot match against 'undefined' or 'null'.

function makeSound({ species = 'animal', sound = 'aaa' } = {},  shit) {
    console.log('The ' + species + ' says ' + sound + '!');
}

makeSound();


 let { species: f, sound: l }  = animal;

console.log(f, l);
