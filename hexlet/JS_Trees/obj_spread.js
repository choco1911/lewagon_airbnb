const toSpread = { lastName: 'Ivanov', name: 'Vasya'};
const receiving = { ...toSpread, name: 'Petya'};

console.log(receiving); // { lastName: 'Ivanov', name: 'Petya'}


// Принимающий объект перезаписывает свойства развертываемого объекта
const node = {
    children: [],
    meta: {},
    name: 'NgiNx',
    type: 'file'

}
const newNode = {...node, name: node.name.toLowerCase()};

console.log(newNode);
