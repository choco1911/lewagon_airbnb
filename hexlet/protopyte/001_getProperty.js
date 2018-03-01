const propertyActions = [
  {
    name: 'body',
    check: arg => typeof arg === 'string',
  },
  {
    name: 'children',
    check: arg => arg instanceof Array,
  },
  {
    name: 'attributes',
    check: arg => arg instanceof Object,
  },
];

//const getPropertyAction = arg => _.find(propertyActions, ({ check }) => check(arg));
const abc1 = (coll, func) => {
    return func(coll[0]);
}

const abc2 = (coll, func) => {
    return func(coll[1]);
}

const getPropertyAction1 = arg => abc1(propertyActions, ({ check }) => {
        console.log(check);
        return check(arg);
    }
);

const getPropertyAction2 = arg => abc2(propertyActions, ({ check }) => {
        console.log(check);
        return check(arg);
    }
);

const result1 = getPropertyAction1('string');
const result2 = getPropertyAction2('string');


// Manual
/*
const result = propertyActions[0].check('string');
*/

console.log(result1);
console.log(result2);
