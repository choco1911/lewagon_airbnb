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

  return [`<${tag.name}${buildAttrString(tag.attributes)}>`,
    `${tag.body}${tag.children.map(buildHtml).join('')}`,
    `</${tag.name}>`,
  ].join('');
};

//export default buildHtml;
// END

const data = ['html',
    [
          ['meta', [
                ['title', 'hello, hexlet!'],
            ]
          ],
          ['body', { class: 'container' }, [
            ['h1', { class: 'header' }, 'html builder example'],
            ['div', [
              ['span', 'span text2'],
              ['span', 'span text3'],
            ]],
          ]],
    ]
];

const result = buildHtml(data);
console.log(result);
