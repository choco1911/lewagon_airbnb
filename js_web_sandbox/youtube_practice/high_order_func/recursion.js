let countDownFrom = (num) => {
    if (num === 0) return;
    console.log(num);
    countDownFrom(num - 1);
}

countDownFrom(10);

let categories = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' },
    { id: 'cats', 'parent': 'mammals' },
    { id: 'dogs', 'parent': 'mammals' },
    { id: 'chihuahua', 'parent': 'dogs' },
    { id: 'labrador', 'parent': 'dogs' },
    { id: 'persian', 'parent': 'cats' },
    { id: 'siamese', 'parent': 'cats' }
]

let makeTree = (categories, parent) => {
    let node = {};
    console.log(categories
        .filter(c => c.parent === parent) // [ { id: 'animals', parent: null } ]
        .forEach(c => node[c.id] =         // c.id = animals  --> node['animals']
           makeTree(categories, c.id)));     // makeTree(categories, animals)
    return node;
}


console.log(
    JSON.stringify(
        makeTree(categories, null)
        , null, 2)
    )
