'use strict'

let arr=['a','b','c','d','e'];
console.log(arr.slice(2));
console.log(arr.slice(2,5));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice());
console.log([...arr]); //spread operator

//SPLICE

//console.log(arr.splice(2));//['c', 'd', 'e']
console.log(arr.splice(-1));
console.log(arr.splice(1,2));
console.log(arr);//['a', 'b']

//REVERSE

arr=['a','b','c','d','e'];
const arr2=['q','p','0','n','m'];
console.log(arr2.reverse());

//CONCAT Method
const letters=arr.concat(arr2);
console.log(letters);

//using spread operator
console.log(...arr,...arr2);

//JOIN
console.log(letters.join('-'));

//AT method
const arr3=[22,28,27,10];
console.log(arr3[2]);
console.log(arr3.at(0));

//
