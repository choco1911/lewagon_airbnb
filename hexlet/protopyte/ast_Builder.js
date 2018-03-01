/*
> ast
{ name: 'html',
    attributes: {},
    body: '',
    children:
            [{ name: 'meta', attributes: {},
               body: '', children: [Object] },
             { name: 'body', attributes: {},
               body: '', children: [Object] } ] }


> ast.children[0].children

[{ name: 'title',
    attributes: {},
    body: 'hello, hexlet!',
    children: []
}]
*/


import _ from 'lodash'; // eslint-disable-line

const singleTagsList = new Set(['hr', 'img', 'br']);

// BEGIN (write your solution here)

const propertyActions = [
  {
    name: 'body',
    check: arg => typeof arg === 'string',
    //action: args => args
    action: args => console.log(args)
  },
  {
    name: 'children',
    check: arg => arg instanceof Array,
    action: args => args.map(item => parse(item) )
    //action: args => console.log(args)
  },
  {
    name: 'attributes',
    check: arg => arg instanceof Object,
    //action: args => Object.keys(args).map(item => { item: args[item]} )
    action: args => console.log(args)
  },
];


const getPropertyAction = arg => _.find(propertyActions, ({ check }) => check(arg));


const parse = (data) => {
  const tag = data.slice(1)     // [[meta], [body]]
    .reduce((acc, arg) => {
      //console.log(acc);
      //nsole.log(arg);
      const { name, action } = getPropertyAction(arg);
      //console.log(name);
      console.log(action(arg));
      //action(arg);

      return { ...acc, [name]: arg };
    }, { name: data[0], attributes: {}, body: '', children: [] });

    //console.log(tag);
    return tag;

};

// END

const data = ['html', [
  ['meta', { id: 'uniq-key' }, [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', [
    ['br'],
  ]],
]];

const ast = parse(data);

//console.log(ast);



const ast = parse(data);

{ name: 'html', attributes: {}, body: '', children: [
  { name: 'meta', attributes: { id: 'uniq-key' }, body: '', children: [
    { name: 'title', attributes: {}, body: 'hello, hexlet!', children: [] },
  ]},
  { name: 'body', attributes: {}, body: '', children: [
    { name: 'br', attributes: {}, body: '', children: [] },
  ]},
]}
