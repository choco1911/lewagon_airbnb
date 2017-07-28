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
        
    if (data.length === 2) {

       if (typeof data[1] === 'string') {
            tagName1 = data[0];
            tagValue2 = data[1];
            return `<${data[0]}>${data[1]}</${data[0]}>` ;
       }

        if (data[1] instanceof Array ) {
            tagName0 = data[0];
            tagValue0 = data[1];
                return `<${data[0]}>${data[1].map(buildHtml).join('')}</${data[0]}>`; // i have guess that map return array that have printed as object
        }

    } 
    if(data.length === 3) {
        if (data[1] instanceof Object) {
           if (typeof data[2] != 'string') {
                tagAttr = data[1];
                tagAttrKey = Object.keys(data[1]);

                return `<${data[0]} ${tagAttrKey}=${tagAttr[tagAttrKey]}>${data[2].map(buildHtml).join('')}</${data[0]}>`;
           }

            tagAttr = data[1];
            tagAttrKey = Object.keys(data[1]);
            return `<${data[0]} ${tagAttrKey}=${tagAttr[tagAttrKey]}>${data[2]}</${data[0]}>`;
        }
    }


};

html = buildHtml(data);
console.log(html);




