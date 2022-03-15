'use strict'
const rest1={
    name:'sriram',
    numGuests:0,
};

const rest2={
    name:'anirudh',
    owner:'srivalli',
};

//OR operator
rest1.numGuests=rest1.numGuests||10;
rest2.numGuests=rest2.numGuests||10;


console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas  falsy value 
console.log(true || 0); // true
console.log(undefined || null); 

//rest1.numGuest ||=10;

//if 1st value is truthy that will be answer or return
//nullist operator for null /undefined
/*rest1.numGuests ??=10;
rest2.numGuests ??=10;

rest1.owner=rest1.owner && '<ANONYMOUS>';
rest2.owner=rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<Anonymous>';
rest2.owner &&= '<Anonymous>';

console.log(rest1,rest2);
*/

