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


const iterAst = (ast) => {
    switch (ast.tag) {
        case 'tagsList':
            return `${ast.body.map(iterAst).join('')}`;
        case 'tag':
            return `<${ast.name}>${iter(ast.body)}</${ast.name}>`;
        default:
            return ast;
    }


}


const buildHtml = (data) => {
        //console.log(data[0])
        //console.log(data[1])
    if (data.length === 2) {

       if (typeof data[1] === 'string') {
            tagName = data[0];
            tagValue = data[1];
           // return [ tagName, tagValue ] ;
            return `<${tagName}>${tagValue}</${tagName}>` ;
       }

        
        if (data[1] instanceof Array ) {
            // return data[0].concat( data[1].map(buildHtml)); // i have guess that map return array that have printed as object
            tagName = data[0];
            tagValue = data[1];

            return `<${tagName}>${tagValue.map(buildHtml)}</${tagName}>`; // i have guess that map return array that have printed as object
        }

    } else if(data.length === 3) {
        if (data[1] instanceof Object) {
           if (typeof data[2] != 'string') {
                // return data[0].concat(data[1], data[2].map(buildHtml)) ;
                tagName = data[0];
                tagAttr = data[1];
                tagAttrKey = Object.keys(data[1]);
                tagValue = data[2];
                 return `<${tagName} ${tagAttrKey}=${tagAttr[tagAttrKey]}>${tagValue.map(buildHtml)}</${tagName}>`;
           }
            // return data[0].concat(data[1], data[2]) ;
            tagName = data[0];
            tagAttr = data[1];
            tagAttrKey = Object.keys(data[1]);
            tagValue = data[2];

            return `<${tagName} ${tagAttrKey}=${tagAttr[tagAttrKey]}>${tagValue}</${tagName}>`;

        }
    }


};

//const astTree = buildHtml(data);
//console.log(iterAst(astTree));
console.log(buildHtml(data));


