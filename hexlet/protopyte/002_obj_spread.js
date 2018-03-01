const acc = { key: 'value', k2: 'defalt value', test: 'aaa' };
const name = 'k2';
const arg = 'v2';

console.log({ ...acc, [name]: arg});


const data = [ 'meta', 'body' ];
const name1 = 'attributes';
const value = { class: 'list_selector'};

const item1 = { name: data[0], attributes: {}, body: '', children: [] };

console.log({...item1, [name1]: value, children: ['title']});
