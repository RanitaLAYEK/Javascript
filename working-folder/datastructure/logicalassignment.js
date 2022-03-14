'use strict'
const rest1={
    name:'sriram',
    numGuest:0,
};

const rest2={
    name:'anirudh',
    owner:'srivalli',
};

//rest1.numGuest=rest1.numGuest||10;
//rest2.numGuest=rest2.numGuest||10;

//rest1.numGuest ||=10;

//if 1st value is truthy that will be answer or return
//nullist operator for null /undefined
rest1.numGuest ??=10;
rest2.numGuest ??=10;


console.log(rest1,rest2);
