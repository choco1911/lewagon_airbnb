// Представим объект в виде массива описания свойств
// У каждого свойства в объекте есть свое описание
// это и есть дескриптор
//

/*
let obj1 = [
    {
        name: 'name',
        writable: true,
        value: 'Vasya'
    },
    {
        name: 'lastName',
        writable: true,
        value: 'Ivanov'
    },
    {
        name: 'length',
        writable: true,
        value: 180
    }
]
*/

/* Параметры свойств в объекте

configurable
enumerable
value
writable
get
set

*/
// Object.defineProperty(obj1, 'nameofproperty', { object })

let obj1 = {
    name: 'Petya',
    lastName: 'Pupkin',
    length: 180
}

// Свойство стало не перечисляемым
// Так же если свойство создается defineProperty по умолчанию
// не перечисляемые и не перезаписываемые
/*
Object.defineProperty(obj1, 'fullName', { value: 'Vasya Ivanov',
enumerable: false, writable: true });

console.log(obj1.fullName);

for (let prop in obj1) {
        console.log(prop);
}

obj1.fullName = '!!!!';
console.log(obj1.fullName);

*/

// Динамически определяемое свойство
// мы не вызываем его как метод

Object.defineProperty(obj1, 'fullName', {
    // метод get служебный метод
    // зарезервированное имя
     get() {
        return `${this.name} ${this.lastName}`;
     },
     set(value) {
         //console.log('new value', value);
         /*
         let parts  = value.split(' ');
         this.name = parts[0];
         this.lastName = parts[1];
         */
         // ES6 destructuring asaingment
         [name, lastName] = value.split(' ');
         this.name = name;
         this.lastName = lastName;
     }
 });


console.log(obj1);

obj1.fullName = 'Vasya Ivanov';

// console.log(obj1.fullName);
console.log(obj1);
