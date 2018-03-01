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

const data1 = ['html', [
  ['head', [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', { class: 'container' }, [
    ['h1', { class: 'header' }, 'html builder example'],
    ['div', [
      ['span'],
      ['span', { class: 'text', id: 'uniq-key' }],
    ]],
  ]],
]];

const data2 = ['html', [
  ['body', [
    ['h2', { class: 'header' }, 'first header'],
    ['div', [
      ['p', 'hello, world'],
      ['p', 'good bye, world'],
      ['a', { class: 'link', href: 'https://hexlet.io' }, 'hexlet.io'],
    ]],
  ]],
]];

const buildHtml = (data) => {
    if (data.length === 1) {
         const tagName = data[0];
         return `<${tagName}></${tagName}>` ;
    }

    if (data.length === 2) {
        const tagName = data[0];
        const tagBody = data[1];

        if (typeof data[1] === 'string') {
            const tagName1 = data[0];
            const tagValue2 = data[1];
            return `<${data[0]}>${data[1]}</${data[0]}>` ;
        }

        if (data[1] instanceof Array ) {
            const tagName = data[0];
            const tagBody = data[1];
                return `<${tagName}>${tagBody.map(buildHtml).join('')}</${tagName}>`;
        }
        if (data[1] instanceof Object) {
           if (typeof data[2] != 'string') {
                const tagAttr = data[1];
                const tagKeyVal = Object.keys(tagAttr).reduce((acc, value) => acc += ` ${value}="${tagAttr[value]}"`, '');

                return `<${data[0]}${tagKeyVal}></${data[0]}>`;
           }
        }
    }
    if(data.length === 3) {
        const tagName = data[0];
        const tagAttr = data[1];
        const tagBody = data[2];
        if (tagAttr instanceof Object) {
           if (typeof tagBody != 'string') {
               const tagKeyVal = Object.keys(tagAttr).reduce((acc, value) => acc += ` ${value}="${tagAttr[value]}"`, '');
               return `<${tagName}${tagKeyVal}>${tagBody.map(buildHtml).join('')}</${tagName}>`;
           }
           const tagKeyVal = Object.keys(tagAttr).reduce((acc, value) => acc += ` ${value}="${tagAttr[value]}"`, '');
           return `<${tagName}${tagKeyVal}>${tagBody}</${tagName}>`;
        }
    }
};

html = buildHtml(data2);
console.log(html);
