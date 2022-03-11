'use strict';

const bookings = [];
const createBooking = function (flightNumber, numPassenger, price) {
    //create an object & push in booking array

    const booking = {
        flightNumber,
        numPassenger,
        price
    }
    console.log(booking);
    bookings.push(booking);
}
createBooking('SE-327');