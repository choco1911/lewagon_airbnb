
// JS наследование используют через прототипы
// прототипы и классы разные вещи

// Преимущества прототипов над классами js
// у прототипов простая и мощная модель наследования
// ключевое слово class - тонкий слой над прототипами

function talk() {
    // console.log(this); // this получает контексты глобального объекта, если мы взываем talk как функцию
    console.log(this.sound);
}

//talk(); // undefined

let animal = {
//    talk: talk
    talk // ES6 style
}

animal.talk(); // undefined - так как у animal нет свойства sound


let cat = {
    sound: 'meow!'
}

Object.setPrototypeOf(cat, animal);

// second stage
let dog = {
    sound: 'woof!'
}

Object.setPrototypeOf(dog, cat);
//

// forth stage

animal.talk = function() {
        // console.log('i am a little teapot');
        console.log('i am a little teapot' + ' AND ' + this.sound);
}



// third stage
let prarieDog = {
        howl: function() {
            console.log(this.sound.toUpperCase());
        }
}
//

cat.talk();
dog.talk();

Object.setPrototypeOf(prarieDog, dog);
prarieDog.howl();
