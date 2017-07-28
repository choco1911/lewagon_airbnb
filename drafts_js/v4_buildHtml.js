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

console.log(data.length);

const buildHtml = (data) => {
        
        //console.log(data[0])
        //console.log(data[1])
    if (data.length === 2) {

       if (typeof data[1] === 'string') {
            tagName1 = data[0];
            tagValue2 = data[1];
            //return `<${tagName1}>${tagValue2}</${tagName1}>` ;
            return `<${data[0]}>${data[1]}</${data[0]}>` ;
       }

        if (data[1] instanceof Array ) {
            tagName0 = data[0];
            tagValue0 = data[1];
            //    return `<${tagName0}> ${tagValue0.map(buildHtml)} </${tagName0}>`; // i have guess that map return array that have printed as object
                return `<${data[0]}>${data[1].map(buildHtml)}</${data[0]}>`; // i have guess that map return array that have printed as object
           
        }

    } 
    if(data.length === 3) {
        if (data[1] instanceof Object) {
           if (typeof data[2] != 'string') {
            //    tagName3 = data[0];
                tagAttr = data[1];
                tagAttrKey = Object.keys(data[1]);
           //     tagValue3 = data[2];

            // console.log(tagName3);

                return `<${data[0]} ${tagAttrKey}=${tagAttr[tagAttrKey]}>${data[2].map(buildHtml)}</${data[0]}>`;
           }

           // tagName = data[0];
            tagAttr = data[1];
            tagAttrKey = Object.keys(data[1]);
           // tagValue = data[2];

            // console.log(tagName4);

            return `<${data[0]} ${tagAttrKey}=${tagAttr[tagAttrKey]}>${data[2]}</${data[0]}>`;

        }
    }


};

//const astTree = buildHtml(data);
//console.log(iterAst(astTree));
//console.log(buildHtml(data));
html = buildHtml(data);
console.log(html);




