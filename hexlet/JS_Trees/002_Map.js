
const map = (f, tree) => {
    const [ name, children] = tree;
    const [ newName ] = f(tree);
    //const newName = f(name);

    if (!children) {
        return [newName];
    }
    return [newName, children.map(c => map(f,c))];
};

/*
const tree1 = [1, [
    [2, [[3],[4]]],
    [5],
    [6, [[7],[8]]],
]];

*/

const tree1 = [1, [
    [2, [ [4],[2] ]],
    [3, [ [2, [ [5],[4] ] ] ] ]
]];

const result = map(x => Math.pow(x, 2), tree1);

console.log(JSON.stringify(result));
