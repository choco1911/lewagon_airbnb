const card = {
    name: 'percent card',
    key:  'value',
};


console.log(card.key);
console.log(card.wrondKey);

console.log(card['key']); // value
console.log(card['wrondKey']); // undefined

// object is muttable
// you can't do - card = {};
// But can add or change property
card['docker'] = 'vasya';
console.log(card.docker);
console.log(card['docker']);

// Boxing - new String('hello')
console.log('hello'.length);

