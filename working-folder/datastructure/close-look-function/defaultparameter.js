'use strict'

const bookings=[];
const createBooking=function(flightNum,numPassenger=2,price=4000*numPassenger){

  /*  numPassenger=numPassenger||1;
    price=price||200;*/

     const booking={
         flightNum,
         numPassenger,
         price
     }
     console.log(booking);
     bookings.push(booking);
}
createBooking('L323');
createBooking('ES345',2,8000);
createBooking('EF367',5);
