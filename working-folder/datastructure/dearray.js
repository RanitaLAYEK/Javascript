'use strict';

const resturants = {
    name: "Avani sharma",
    location: 'Delhi-chennai',
    categories: ['organic', 'vegetarian'],
    starterMenu: ['pizza', 'garlic bread', 'capacino'],
    mainMenu: ['chicken curry', 'alur dum'],
    openingHours:{
        mon:{  
          open:10,
          close:22,
        },
        tue:{
          open:9,
          close:4,
        },
        fri:{
         open:7,
         close:8,
        }
      },
 order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
,
    orderDelivery:function(obj){
        console.log(obj);
      }
}

resturants.orderDelivery({
    time:'22.30',
    address:'mia amore',
    mainIndex:2,
    starterIndex:2,
})


/*const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log([x, y, z]);
console.log(arr);

const [first, second] = resturants.categories;
console.log(first, second);//use for destructuring

let [main, secondary] = resturants.categories;
//swap a variable
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

//different technique for switching variable
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return value
//const [main,secondary]=resturants.order(2,0);
//console.log(main,secondary);



//Receive 2 value from a function.
const [starter,mainCourse]=resturants.order(2,0);
console.log(starter,mainCourse);

//Nested Array

const nested = [2, 3, [4, 5]];
const [i, , j] = nested;
console.log(i, j);

const [p, ,[q,k]]=nested;
console.log( p,q,k);

const [l=1,m=1,n=1]=[11,12];
console.log(l,m,n);

const resturant={
    name:"Avani sharma",
    location:'Delhi-chennai',
    categories:['organic','vegetarian'],
    starterMenu:['pizza','garlic bread','capacino'],
    mainMenu:['chicken curry','alur dum'],
    openingHours:{
      mon:{  
        open:10,
        close:22,
      },
      tue:{
        open:9,
        close:4,
      },
      fri:{
       open:7,
       close:8,
      }
    }
}

/*orderDelivery:function(obj){
    console.log(obj);
  }

  resturants.orderDelivery({
      time:'22:30',
      addre:'swf',
  })

  orderDelivery();*/

const {name,starterMenu,openingHours}=resturant;
console.log(name,starterMenu,openingHours);

const {name:urname,starterMenu:sMenu,openingHours:oHours}=resturant;
console.log(urname,oHours,sMenu);

//If we want to input default value

const {menu=[],starterMenu:s1Menu=[]}=resturant;
console.log(menu,sMenu);

//Mutating variable
let a1=10;
let b=20;

const obj={a1:20,b:25,c:30}
({a1,b}=obj);
console.log(a1,b);

const {fri:{open,close}}=openingHours;
console.log(open,close);