'use strict'

console.log(Math.sqrt(4));//squareroot
console.log(2**(1/2));
console.log(8**(1/3));

console.log(Math.max(11,29,34,56,1));
console.log(Math.max(24,27,29,'40',30));
console.log(Math.min(11,29,34,56,1));

//Area of a circle
console.log(Math.PI*Number.parseFloat('10px')**2);
console.log(Math.trunc(Math.random*6)+1);//till 4 random number will generate

//Generate random number
const randomList=(max,min)=>(Math.random()*(max-min)+1);
console.log(randomList(10,20));

//Rounding integer
console.log(Math.trunc(23.3));
console.log(Math.round(23.8));

console.log(Math.ceil(23.8));
console.log(Math.floor(23.8));
console.log(Math.round(23.8));

//Rounding Decimal
//console.log((2,7).tofix(0));//it return a string

//Boxing in javascript

//Reminder operator==return reminder of a division
console.log(3%2);

//EVEN OR ODD Number

const isEven=n=>(n%2===0);
console.log(isEven(10));
console.log(isEven(21));
console.log(isEven(8));


