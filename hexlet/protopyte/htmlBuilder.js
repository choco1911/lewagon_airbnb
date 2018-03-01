const data = ['html', [
  ['meta', [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', { class: 'container' }, [
    ['h1', { class: 'header' }, 'html builder example'],
    ['div', [
      ['span', 'span text2'],
      ['span', 'span text3'],
    ]],
  ]],
]];


const tagCheck = (tagData) => {

    switch (tagData[1].constructor) {
     case Array:
        return `<${tagData[0]}>doSomethingWithArray</${tagData[0]}>`;
     case Object:
        return 'Object';
     default:
        return `<${tagData[0]}>${tagData[1]}</${tagData[0]}>` ;
    }
}

/*
console.log(tagCheck({ class: 'meta'}));
console.log(tagCheck(['abc']));
console.log(tagCheck('abc'));
*/

const htmlParser = (acc, tag) => {

    // html [meta, body]
        tagCheck(tag);
};

/*

const buildHtml = (pFunc, data) => {
    return data.reduce(pFunc, '');
}

*/
