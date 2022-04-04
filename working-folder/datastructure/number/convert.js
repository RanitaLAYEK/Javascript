'use strict'

console.log(23===23.0);

//binary base -2 (0,1)
//base 10-0 to 9 

console.log(0.1+0.2);
console.log(0.1+0.2===0.3);//false

console.log(Number('23'));//23 
console.log(+'23');//23

//parsing--parse a number to string
console.log(Number.parseInt('30px'));//30
console.log(Number.parseInt('e30'));//Nan
console.log(Number.parseFloat('3.8rem'));//3.8
console.log(Number.parseInt('3.8rem'));//3

//NaN==not a number==to check any value is a number(like isNaN);

console.log(Number.isNaN(23));//false
console.log(Number.isNaN('23'));//false
console.log(Number.isNaN(+'20x'));//true

console.log(Number.isFinite(20));
console.log(Number.isInteger(23));




