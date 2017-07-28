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


const buildHtml = (data) => {


    const recur = (data) => {
            if (data.length === 0 ) {
                return '';
          }

        console.log(data);



       if (typeof data[1] === 'string') { 
            const tag = data.shift();
            const body = data.shift();
//            console.log(tag);
            console.log(body);
           console.log(data);
            return tag + ' ' + body + ' ' + recur(data) + ' ' + tag;
       }


       if (data[1] instanceof Array) {
            const next = data[1];
            console.log('----'); 
         //   console.log(next); 
            const tag = data.shift();
       // return tag + ' ' + recur(next[0]) + recur(next[1]) + ' ' + tag;
            return recur(next[1]);

       }

       if (data[1] instanceof Object) {
            const tag = data.shift();
            const param = data.shift();
            const key = Object.keys(param);
            const value = param[key];
            const tagBody = data;

            console.log(tagBody)
            return tag +' '+ key +' ' + value + ' ' + recur(tagBody) + ' ' + tag;
       }

       
       const tag = data.shift();
        console.log('---');
        console.log(tag);

       //return tag + ' ' + recur(data) + ' ' + tag ;
    }
    return recur(data);


};

console.log(buildHtml(data));
//buildHtml(data);
