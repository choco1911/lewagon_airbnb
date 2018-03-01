import _ from './node_modules/lodash';
// BEGIN
const propertyActions = [
  {
    name: 'body',
    check: arg => typeof arg === 'string',
  },
  {
    name: 'children',
    check: arg => arg instanceof Array,
  },
  {
    name: 'attributes',
    check: arg => arg instanceof Object,
  },
];

//    https://lodash.com/ _.find(collection, (func-prepicate returns (true || false)))
const getPropertyAction = arg => _.find(propertyActions, ({ check }) => check(arg));   // { check } is item of propertyActions object

const buildAttrString = attrs =>
  Object.keys(attrs).map(key => ` ${key}="${attrs[key]}"`).join('');

const buildHtml = (data) => {
  const tag = data.slice(1)     // [[meta], [body]]
    .reduce((acc, arg) => {
      const { name } = getPropertyAction(arg);
      return { ...acc, [name]: arg };
    }, { name: data[0], attributes: {}, body: '', children: [] });

    return {
        name: tag.name,
        attributes: tag.attributes,
        body: tag.body,
        children: tag.children.map(buildHtml)
    }
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

const result = buildHtml(data);
//console.log(result);
console.log(JSON.stringify(result, null, 1));
