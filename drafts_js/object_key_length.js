
htmlAttr = { class: 'link', href: 'https://hexlet.io' };


attr= Object.keys(htmlAttr).reduce((acc, value) => acc += ` ${value}="${htmlAttr[value]}"`, '');

//console.log(Object.keys(htmlAttr).length);
console.log(attr);





