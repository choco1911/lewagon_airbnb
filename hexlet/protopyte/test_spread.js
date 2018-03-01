const acc = { ddd: 'abc'};
const key = 'aaa';
const attrs = { aaa: 'bbb'};
const xxx = { ...acc, [key]:attrs[key] };
console.log(xxx);

/*
const arr = [ {},
        { abc: 'bbb'},
        { bca: 'aaa'},
        {},
        { sus: 'a'},
        {}
 ];
 */

const arr = { abc: 'bbb'};
const obj2 = Object.keys(arr).reduce((acc, key) => {
     return { ...acc, [key]: arr[key] };
 }, {});

console.log(JSON.stringify({ xyz : [ { children: { name: 'xxx', kiss: obj2} } ]} ));
console.log([ { children: { name: 'xxx', kiss: obj2} } ] );
console.log( { children: { name: 'xxx', kiss: obj2} }  );


const obj1 = {
    yyy: xxx
}

console.log(obj1);


const params = {
    className: 'row',
    title: 'name'
}

console.log({...params});
