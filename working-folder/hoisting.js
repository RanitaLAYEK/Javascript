console.log(xy)

var xy='Rim';
let job='Teacher';
const year=1992;


console.log(addDec(2,3));
//console.log(addExpr(2,3));

function addDec(a,b){
   return a+b;
}

//const addExpr=function (a,b){//hoisting.js:9 Uncaught ReferenceError: Cannot access 'addExpr' before initialization -due to const use.
  //return a+b;}

//const addArrow=(a,b)=>a+b;

console.log('undefined');
if(!numProducts) deleteShopping();
var numProducts=10;

function deleteShopping(){
    console.log('all products deleted');
}

var x=1;
let y=2;
const z=4;

//in window property we will get o/p for x/var let const is not present.

console.log(x===window.x);


