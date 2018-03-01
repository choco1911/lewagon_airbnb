let obj1 = {
    name: 'Vasya',
    lastName: 'Ivanov',
    legth: 160,
    /*
    valueOf() {
        return this.length;
    },
    */
    toString() {
    //    return this.name + ' ' + this.lastName;
    // ES6 style
        return `${this.name} --> ${this.lastName}`;
    }
}

let obj2 = {
    name: 'Sergey',
    lastName: 'Petrov',
    legth: 180,
    /*
    valueOf() {
        return this.length;
    },
    */
    toString() {
    //    return this.name + ' ' + this.lastName;
    // ES6 style
        return `${this.name} --> ${this.lastName}`;
    }
}

// на экран выводится строковое представление объекта
// по умолчанию в браузре(зависит от реализации) [object Object]
// метаинформацию об объекте

console.log(obj1 + ' vs ' + obj2);
console.log(`${obj1.toString()} vs ${obj2.toString()}`);
console.log(`${obj1} vs ${obj2}`);

// valueOf и toString разный приоритет
// первым вызывается valueOf


// в DeepEqual используется рекурсия
