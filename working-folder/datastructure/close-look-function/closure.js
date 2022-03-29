'use strict'
/*closure  -
1)return a function
A closure makes a function remember all the variables that existed in the function birthplace.
*/
const secureBooking=function(){
    let passengerCount=0;//parent function
    return function(){
      passengerCount++;//functinality change
      console.log(`${passengerCount} passengers`);
    }
}
 
//call the securebooking function & store in new variable booker

const booker=secureBooking();

booker();
booker();
booker();

//Example
function x(){
    let a=7;
    
  function y(){
      console.log(a);
  }
  y();
}

x();

