const abc = { ddd: 'abc'};
console.log(abc);
console.log({ ddd: 'abc'});

import _ from './node_modules/lodash';

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

const getPropertyAction = arg => _.find(propertyActions, ({ check }) => check(arg));

const buildAttrString = attrs =>
  Object.keys(attrs).map(key => ` ${key}="${attrs[key]}"`).join('');


  const buildHtml = (data) => {
    const tag = data.slice(1)
      .reduce((acc, arg) => {
          const { name } = getPropertyAction(arg);
          return { ...acc, [name]: arg };
      }, { name: data[0], attributes: {}, body: '', children: [] });
      console.log(tag)
      return tag;
  }
/*
    return [`<${tag.name}${buildAttrString(tag.attributes)}>`,
      `${tag.body}${tag.children.map(buildHtml).join('')}`,
      `</${tag.name}>`,
    ].join('');
  };
*/
/*
  const data = ['html',
      [
            ['meta', [
                  ['title', 'hello, hexlet!'],
              ]
            ],
            ['body', { class: 'container' }, [
              ['h1', { class: 'header' }, 'html builder example'],
              ['div', [
                ['span', 'span text3'],
                ['span', 'span text3'],
            ]],
            ]],
      ]
  ];
*/

const dataPart =  ['meta', [
                  ['title', 'hello, hexlet!'],
              ]
  ];

const tag = buildHtml(dataPart) ;
console.log(tag.children.map(buildHtml).shift()) ;
