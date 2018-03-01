function Person(saying){
    this.saying = saying;
    /*
    return {
            dumbObject: true;
    }
    */
}

Person.prototype.talk = function() {
    console.log('I say:', this.saying);
}

/*
var crockford = new Person('SEMICOLANS!!!!1one1');
crockford.talk();
*/


// new
// 1. создает новый объект
// 2. устанавливает прототип
// 3. выполняет конструстор c установкой this
// 4. возвращает созданный объект

function new2(constructor) {
    var obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    // ES 6
    // var argsArray = Array.from(arguments);
    // ES 5
    var argsArray = Array.prototype.slice.apply(arguments);
    return constructor.apply(obj, argsArray.slice(1)) || obj;
}

var crockford = new2(Person, 'SEMICOLANS!!!!1one1');
crockford.talk();
