'use strict'

const orderSet=new Set([
    'pizza',
    'pasta',
    'picaso',
    'pizza',
    'pizza'
]);

console.log(orderSet);

//strings,sets are also iterable

console.log(new Set('jonas'));
console.log(orderSet.has('pizza'));
//has is a method inbuilt its similar to includes method
console.log(orderSet.has('pasta'));
orderSet.add('Garlic bread');
orderSet.add('Garlic bread');
orderSet.delete('picaso');
console.log(orderSet);

for(const order of orderSet){
    console.log(order);
}

//sets use for remove duplicate values

const staff=['A','B','C','A','C'];
//set to Array convert
const staffSet=[...new Set(staff)];
    console.log(staffSet);
//console.log(new Set['A','B','C','A','C'].size








