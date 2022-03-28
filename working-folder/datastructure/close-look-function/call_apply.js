'use strict';

const indigo = {
    airline: 'Indigo',
    iataCode: 'IN',
    bookings: [],
    //book=function(){}
    book(flightNum, pName) {
        console.log(`${pName} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, pName });
    },

};

indigo.book(239, 'Jonas Schmedtmann');
indigo.book(635, 'John Smith');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = indigo.book;

// Does NOT work  & then come 3 methods call apply bind
// book(23, 'Sarah Williams');

// Call method

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(indigo, 239, 'Mary Cooper');
console.log(indigo);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');


//apply doesn't receive a list of argument after this keyword

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//Bind method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(indigo);
const bookLX = book.bind(swiss);

bookEW(24, "Melvis chang");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Martha king");
bookEW23("Darthy");

//with eventListner

indigo.planes = 200;
indigo.buyplanes = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes)
};
document.querySelector('.buy').addEventListener('click', indigo.buyplanes.bind(indigo));

//partial application--we can pre set parameter

const addTax = (rate, value) => value + value * rate;
  console.log(addTax(0.5,200));

  const addVAT=addTax.bind(null,0.23);//predefined value
  //addVAT=value=>value + value * rate;
  console.log(addVAT(100));

  //function returning another function example

  

/*
let name = {
    firstName: "Mary ",
    lastName: "Cooper"
    /* printfulName:function(){
         console.log(this.firstName +" "+this.lastName)
     }
 }
}

let printfulName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " " + "from" + " " + hometown + " " + state);
}

printfulName.call(name, "delhi", "DELHI");

let name2 = {
    firstName: "sachin",
    lastName: "Tendulkar",
}
//function borrowing

printfulName.call(name2, "kolkata", "W.B");

printfulName.apply(name2, ["kolkata", "W.B"]);

//bind method

let printMyName = printfulName.bind(name2, "mumbai", "W.B");
console.log(printMyName);
printMyName();
*/