
// falsy values
let var1 = '';
let var2 = 0;
let var3 = undefined;
let var4 = false;
let var5 = null;


if (var1) {
    console.log('!!!');
}

if (var2) {
    console.log('@@@');
}

if (var3) {
    console.log('@@@');
}

if (var4) {
    console.log('@@@');
}

if (var5) {
    console.log('@@@');
}
// when we put object into variable
// we put address of memory chunk
// let  obj1 = 0x252fd;
// let  obj2 = 0x432fx;
// if (0x252fd == 0x432fx) so it's not equal

// if we using valueOf we can compare objects property
let obj1 = {
    name: 'Vasya',
    hight: 180,
    /* ES6 notation
    valueOf() {
        return this.hight;
    }
    */
    valueOf: function() {
        return this.hight;
    }
}

let obj2 = {
    name: 'Vasya',
    hight: 160,
    /* ES6 notation
    valueOf() {
        return this.hight;
    }
    */
    valueOf: function() {
        return this.hight;  // this указывает на объект
                            // внутри, которого находится метод
                            // это один случаев.
    }

}
// Один из кейсов использования valeOf, например
// опеределить клиента с самым большим счетом.
// заганяем свойство значения счета в valeOf и сравниваем
// valeOf вызывается когда мы пытаемся произвести арифметическое
// действие с объектом или сравнения
// зарезервиврованный метод

if (obj1 > obj2) {
    console.log('!!!');
}
