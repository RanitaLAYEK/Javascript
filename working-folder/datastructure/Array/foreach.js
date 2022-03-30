'use strict'
const movements=[200, 450, -400, 3000, -650, -130, 70, 1300];

//for (const movement of movements){
    for(const [i,movement]of movements.entries())//entries is like array entity
    {
    if(movements>0){
        console.log(`Movement ${i+1}:You deposited ${movement}`);
    }else{
        console.log(`Movement ${i+1}:You withdrew ${Math.abs(movement)}`);
        
    }
}

console.log('================================================');

movements.forEach(function(movement,index,array){ 
        if(movements>0){
            console.log(`Movement ${index+1}:You deposited ${movement}`); 
                        //current element,currrent index,current array
        }else{
            console.log(`Movement ${index+1}: You withdrew ${Math.abs(movement)}`);
        }
    });

/* 0: function(200)
 1: function(450)
 2: function(400)
 ...
abs-absolute value
foreach loop break statement dont work 
foreach --needs a callback function,passes the current element of array
forEach With Maps and Sets */

const currencies=new Map([
    ['USD','United States dollar'],
    ['EUR', 'Euro'],
  ['GBP', 'Pound sterling']
]);

currencies.forEach(function(value,key,map){
    console.log(`${key}: ${value}`);
})

//SET

// Set
const currenciesUnique1 = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique1);
currenciesUnique1.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

//passing iterables like []