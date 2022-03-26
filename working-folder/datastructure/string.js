'use strict'

const airline='Air Asia';
const airplane='AAE01';

console.log(airplane[0]);
console.log(airplane[1]);
console.log(airplane[2]);

//string direct o/p
console.log('BB293'[0]);

//length property from a string

console.log(airplane.length);

//comparing string to Array
console.log(airline.indexOf('s'));
//console.log(airline.lastIndexOf('s'));
console.log(airline.indexOf('Asia') );

//slice method

console.log(airline.slice(4));
console.log(airline.slice(4,7));
console.log(airline.slice(0,airline.indexOf(' ')));
console.log(airline.slice(0,airline.lastIndexOf(' ')*1));

console.log(airline.slice(-2));
console.log(airline.slice(0,-1));

const checkMiddleSeat=function(seat){
    const s=seat.slice(-1)
    if(s==='B' ||s==='E'){
        console.log('you got the middle seat');
    }else{
        console.log('you are lucky');
    }
}
checkMiddleSeat('11B');
checkMiddleSeat('23A');
checkMiddleSeat('3E');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//fix capitalization in name
const passenger='SharMa';
const passengerLower=passenger.toLowerCase();
const passengerCorrect=passengerLower[0].toUpperCase()+passengerLower.slice(1);
console.log(passengerCorrect);

//To chcek a input email

const email='rupsaroy@com';
const logEmail='  RUpsaroy@com';

const lowerEmail=logEmail.toLowerCase();
//remove method  white space from any string

const trimmEmail=lowerEmail.trim();

const normalizedMail=logEmail.toLowerCase().trim();
console.log(normalizedMail);
console.log(email===normalizedMail);

//REplace part of string
const priceIndia='524,000-';
const priceUs=priceIndia.replace('-','$');
console.log(priceUs);
const priceFinal=priceUs.replace(',','.');
console.log(priceFinal);

//Return boolean==startwith,endwith

const plane='Airbus A320Indigo';
console.log(plane.includes('A320'));
console.log(plane.startsWith('In'));
console.log(plane.endsWith('go'));

if(plane.startsWith('Airbus')&& plane.endsWith('go')){
    console.log('part of the new Airbus family')
}

const checkBaggage=function (items){
const baggage=items.toLowerCase();
if(baggage.includes('knife')||baggage.includes('gun')){
   console.log('you are not allowed onboard');
}
else{
    console.log('you are not allowed');

}
}

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

console.log('a+very+nice+woman'.split('+'));
console.log('mira leopard'.split(''));

const [firstName, lastName] = 'mira leopard'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitaLizename=function(name){
  const names=name.split('');
  const namesUpper=[];
  for(const n of names){
namesUpper.push(n[0].toUpperCase()+n.slice(1));
  }
  console.log(namesUpper.join(''));
}


//transform the 1st letter capital
capitaLizename('jessica ann smith davis');
capitaLizename('jonas schmedtmann');
//padding a string
const message = 'Go to gate 23!';
console.log(message.padStart(25,'+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const mastCreditCard=function(number){
   const str=number+'';//convert into number to string
   const last=str.slice(-4);
   return last.padStart(str.length,'*');
}
console.log(mastCreditCard(64637836));
console.log(mastCreditCard(43378463864647384));
console.log(mastCreditCard('334859493847755774747'));

//Repeat method

const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
    console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);


//string Example 

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getcode=str=>str.slice(0,3).toUpperCase();
console.log(flights.split('+'));
for (const flight of flights.split('+')){
    const [type,from,to,time]=flight.split(';');
    const output=`${type.replaceAll('_',' ')} from ${getcode(from)} to ${getcode(to)}  (${time.replace(':','h')})`;
    console.log(output);
}