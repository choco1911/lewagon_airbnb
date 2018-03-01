
//      * A
//      /|\
//     B*C*D
//     /| |\
//    E F G J

const dfs = (tree) => {
    const [name, children] = tree;
    console.log(name);
//    console.log(children);

    if (!children) {
        return;
    }

    return children.map(dfs);

};

const tree = ['A', [
    ['B', [['E'],['F']]],
    ['C'],
    ['D', [['G'],['J']]],
]];

dfs(tree);


// Tree mapping

const dfs2 = (tree) => {
    const [name, children] = tree;
    const newName = name.toLowerCase();
    if (!children){
        return [newName];
    }
    return [newName, children.map(dfs2)];
}

const tree2 = ['A', [
    ['B', [['E'],['F']]],
    ['C'],
    ['D', [['G'],['J']]],
]];

console.log('Tree Mapping:');
console.log(JSON.stringify(dfs2(tree)));
