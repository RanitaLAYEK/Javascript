'use strict'

const flight='ES515';
const passengerDetails={
    name:'Ranita Nandi',
    passport:2345678
}

const checkIn=function(flightNum,passenger){
flightNum ='LA123';
passenger.name='Ms. '+ passenger.name;

if(passengerDetails.passport===2345678){
alert('check In');
}else{
    alert('wrong passport');
}
}
checkIn(flight,passengerDetails);
console.log(flight);
console.log(passengerDetails);

const flightNum=flight;
const passenger=passengerDetails;

const newPassport=function(person){
  person.passport=Math.trunc(Math.random()*1000000);
}

newPassport(passengerDetails);
checkIn(flight,passengerDetails);