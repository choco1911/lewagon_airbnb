let dog = {
    sound: 'woof',
    talk: function() {
        console.log(this.sound);
    }
}

dog.talk() // woof

let talkFunc = dog.talk;

// при присваивании метода переменной теряется контекст this
talkFunc(); // undefined

// привязка контекста
let boundFunc = talkFunc.bind(dog);

boundFunc();


// more real-world example

let button = document.getElementById('myNiceButton');

button.addEventListener(
    'click',
// здесь мы назначаем метод dog.talk к обработчику кнопки 'click'
// когда вызовется обработчик this будет не dog - this будет объект window
//
    dog.talk.bind(dog);

);
