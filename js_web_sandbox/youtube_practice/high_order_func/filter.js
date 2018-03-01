// filter

var animals = [
        { name: 'Fluffykins', species: 'rabbit' },
        { name: 'Caro', species: 'dog' },
        { name: 'Hamilton', species: 'dog' },
        { name: 'Harold', species: 'fish' },
        { name: 'Ursula', species: 'cat' },
        { name: 'Jimmy', species: 'fish' }
];

/*
var dogs = animals.filter(function(animal) {
    return animal.species === 'dog';
})
*/

var isDog = function(animal) {
    return animal.species === 'dog';
}

// isDog - is callback fucntion
// filter calls it inside

var dogs = animals.filter(isDog);

// imperative way
/*
var dogs = [];
for (var i=0; i<animals.length; i++) {
    if (animals[i].species === 'dog')
        dogs.push(animals[i])
}
*/

console.log(dogs);
