'use strict'

const greet=function(greeting){
  return function(name){
     console.log(`${greeting} ${name}`);

  }
}

const greethey=greet('Hey');
greethey('martha');
greethey('bridge');

greet('hi')('man');

const greetArr =greeting=>name=>
console.log(`${greeting} ${name}`);

greetArr('hello')('man');

