// const chunk = (list, cLength) => {
//
    // [...newArr] = list.slice(0, cLength);
    // [...newArr2] = list.slice(cLength);
    // return [newArr, newArr2];
//
// }

// const chunk = (list, cLength) => {
 // return list.slice().reduce((acc, value, index, arr) => {
     // const part = arr.splice(0,cLength);
     // acc.splice(0,0,part);
     // return acc;
 // }, []).reverse();
// }

  const chunk = (list, cLength) => {
      return list.reduce((acc, value, index, arr ) => {
               if (arr.length > cLength){
                   if (index === arr.length - 1) {
                      const mainPart = acc.splice(0,cLength) ;
                      const leftPart = [...acc ,value];
                      return [mainPart, leftPart];
                   }
               }
                   return [...acc, value] ;
       }, []);
   }
  console.log(chunk(['a'], 3));


 // const chunk = (list, cLen) => {
       // return list.reduce((acc, value) => {
             // // to arr hole arr
             // // if (acc.length > 0) {
                 // // console.log(acc.length);
                 // // console.log(acc);
                 // // [acc] = acc;
             // // }
             // [...acc] = [...acc.slice(0,-1), value];
             // if (acc.length >= cLen) {
//
                 // return [...acc.slice(0,-1)];
             // }
//
             // return [acc.slice(0,-1)];
        // }, []);
 // }

 // const chunk = (list, cLen) => {
        // return [ list.reduce((acc, value, index, arr) => {
//
            // if (acc.length < cLen) {
                // console.log('inside block');
                // console.log(value);
                // //return [...acc, [...acc.slice(0, -1), value ]];
                // return [...acc, value];
//
            // }
            // //return [...acc, value];
            // return [[...acc], [...acc.slice(0,-cLen), value ]];
//
//
        // }, []) ];
 // }



//console.log(chunk([], 2));
//console.log(chunk(['a','b', 'c'], 2));

//const aaa = ['a', 'b', 'c', 'd'];
// const acc = ['a','c'];
// const value = 'b';
// const b = [...acc.slice(0,-1), value];
// const result = [acc, b];
//
// console.log(result);

 // item1 = aaa.splice(0,2);
 // console.log(aaa.length);
 // item2 = aaa.splice(0,2);
 // console.log(aaa.length);
//
// xxx.splice(0,0, item1, item2);
// console.log(xxx);

//const aaa = ['a', 'b', 'c', 'd']; //aaa.splice(0,0,'e'); //console.log(aaa);
