'use strict'

var a=10;
a=20;
console.log(a);

let b=20;
b=30;
console.log(b);

const c=40;
//c=50;let-const-var.js:12 Uncaught TypeError: Assignment to constant variable.
console.log(c);

//FUNCTIONAL SCOPE & BLOCK SCOPE

let number=10;
function sum(){
    const arr=[1,2,3,4];
    let sum=0;
    for (let i=0;i>arr.length;i++){
        sum=sum+arr[i];
    }
    }