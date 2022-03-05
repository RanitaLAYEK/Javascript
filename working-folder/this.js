
'use strict';

console.log(this);
const calcAge=function(birthyear){
    console.log(2037-birthyear);
    console.log(this);
};
calcAge(1990);

const calcArrow=birthyear=>{
console.log(2037-birthyear);
console.log(this);
}
calcArrow(1991);
//we will get the o/p of arrow function

const jonas={
    year:1990,
    calcAge:function(){
     console.log(this);
     console.log(2040-this.year);
    }
}
jonas.calcAge();//o/p-jonas object

//Method borrowing

const mathila={
    year:2000,
}

mathila.calcAge=jonas.calcAge;
mathila.calcAge();
