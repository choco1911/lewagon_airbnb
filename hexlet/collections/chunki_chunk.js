//
//rest vs spread const aaa = ['a'] || [] ;
//splice vs slice
//
// > [f, ...s] = [...[], 'a'];
// > f
// 'a'
// > s
// []
//
// [f, ...s] = [...[['a']], 'b']
// f = ['a']
// s = ['b']
// > [f.concat(s)]
//
// [ [ 'a', 'b' ] ]
//
//
// [f, ...s] = [...[['a', 'b']], 'c']
// f = ['a', 'b']
// s = ['c']
//
// > [f,s]
// [ [ 'a', 'b' ], [ 'c' ] ]
//
//
// > [a,...b] = [['c'],'d'];
// [ [ 'c' ], 'd' ]
// > a
// [ 'c' ]
// > b
// [ 'd' ]
// > [a.concat(b)]
//
// [ [ 'c', 'd' ] ]

const chuck = (list, chuckLen) => {
 return list.reduce((acc, item, index) => {
        const [f, ...s] = [...acc, item];
        if ( f instanceof Array && f.length < chuckLen ) {
            return [f.concat(s)];
        } else if (f.length >= chuckLen) {
            if (acc.length === 2) {
                let a = s.slice(0,-1).shift().concat(s.splice(1,2));
                return [f,a];
            }
            return [f,s];
        }
        return [[f, ...s]];
    } , [] );
}

// const result = chuck(['a','b','x', 'c', 'd','f'], 4);
const result = chuck(['a'], 4);


console.log(result);
