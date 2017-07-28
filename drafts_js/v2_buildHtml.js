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
//        console.log(data[0])
        //console.log(data[1])
    if (data.length === 2) {

       if (typeof data[1] === 'string') {
            // console.log(data[0])
            // console.log(data[1])
            tagName = data[0];
            tagValue = data[1];
            // return { tagName : tagValue } ;
            return [ tagName, tagValue ] ;
       }

        if (data[0] instanceof Array) {
            console.log(222);
           return buildHtml(data[0]) ;
        }
        
        if (data[1] instanceof Array ) {
           // console.log(data[1]);
 //           return { tag: data[0], value: data[1].map(buildHtml) }; // i have guess that map return array that have printed as object
            return data[0].concat( data[1].map(buildHtml)); // i have guess that map return array that have printed as object
        }

    } else if(data.length === 3) {
        if (data[1] instanceof Object) {
 //          console.log(111);
           if (typeof data[2] != 'string') {
               // return { tag: data[0], attr: data[1], value: data[2].map(buildHtml) };
                return data[0].concat(data[1], data[2].map(buildHtml)) ;
           }
                //return { tag: data[0], attr: data[1], value: data[2] };
                return data[0].concat(data[1], data[2]) ;
        }
    }


};

//const astTree = buildHtml(data);
//console.log(iterAst(astTree));
console.log(buildHtml(data));


