'use strict'
//syntax
/*function x(y){
    y();
}
x(function y(){
    //call back function
   
});*/

setTimeout(function(){
    console.log("Timer")
}, 1000);

function x(y){
    console.log("X");
    y();
}
x(function y(){
    console.log("Y");
   
})

//==========================================================
const oneWord=function(str){
  return str.replace(/ /g,'').toLowerCase();
}
const upperFirstWord=function(str){
  const [first,...others]=str.split('');
  return[first.toUpperCase(),...others].join('');
};

// Higher-order function
const transformer=function(str,fn){
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
  
}

transformer('js is good to know',upperFirstWord);
transformer('JavaScript is the best!', oneWord);


