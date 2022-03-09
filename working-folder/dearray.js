'use strict';

const resturants={
    name:"Avani sharma",
    location:'Delhi-chennai',
    categories:['organic','vegetarian'],
    starterMenu:['pizza','garlic bread','capacino'],
    mainMenu:['chicken curry','alur dum'],
order: function (starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
}
};

const arr=[2,3,4];
const a=arr[0];
const b=arr[1];
const c=arr[2];

const [x,y,z]=arr;
console.log([x,y,z]);
console.log(arr);

const [first,second]=resturants.categories;
console.log(first,second);//use for destructuring

let [main,secondary]=resturants.categories;
//swap a variable
const temp=main;
main=secondary;
secondary=temp;
console.log(main,secondary);

//different technique for switching variable
[main,secondary]=[secondary,main];
console.log(main,secondary);

//Receive 2 return value
//const [main,secondary]=resturants.order(2,0);
//console.log(main,secondary);

//Nested Array

const nested=[2,3,[4,5]];
const [i, ,j]=nested;
console.log(i, j);


