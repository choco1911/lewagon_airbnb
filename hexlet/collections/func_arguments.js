function sum() {
    // arguments in an object
    //console.log(arguments); // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
    //console.log(arguments.length); // 5
    let result = 0;

    for (let i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }

    return result;

}


console.log(sum(1,2,3));
