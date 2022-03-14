//used for new array or multiple functions



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
    orderDelivery:function({starterIndex=1,mainIndex=0,address,time='20:00'}){
        console.log(`order food received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} on ${time}`);//call a function
      },
      //spread because on right side operator
/*const arr1=[1,2,...[3,4]];
//rest because on left side operator
const [a,b,...others]=[1,2,3,4,5];
console.log(a,b,...others);

const {pizza,jalebi,...others}:[...resturants.mainMenu,...resturants.mainMenu];
  console.log(pizza,jalebi,...others);
    }*/

  }
