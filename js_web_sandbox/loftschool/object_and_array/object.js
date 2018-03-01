let obj1 = {
    name: 'Sergey',
    lastName: 'Melukov',
    sex: 'male',
    age: 0
};

// if we don't know name of property
let key = 'lastName';
console.log(obj1[key]);

// rewrite property of object
obj1.lastName = '!!!';

console.log(obj1);

// delete property
delete obj1.lastName;
console.log(obj1);

// iterate by property - dump property name
// interpolate value of variable prop
for (let prop in obj1) {
    console.log('Property name: ', prop);
    console.log('Property value: ', obj1[prop]);
}

// we have property in object
// by value has falsy value so if iterpite as false
// so we can't rely on if check in this case
if (!obj1.age) {
    console.log('No such property in object');
}

if (obj1.hasOwnProperty('age')) {
    console.log('There is property in object');
} else {
    console.log('No such property in object');
}

console.log(Object.keys(obj1));
keys = Object.keys(obj1);

// imitate for ... in
for (let i = 0; i < keys.length; i++) {
    console.log(keys[i]);
    let key = keys[i];
    console.log(obj1[key]);
}

Object.keys(obj1).forEach(key => console.log(obj1[key]));
