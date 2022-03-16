'use strict'

const orderSet=new Set([
    'pizza',
    'pasta',
    'picaso',
    'pizza',
    'pizza'
]);

console.log(orderSet);

//strings are also iterable

console.log(new Set('jonas'));
console.log(orderSet.size);
