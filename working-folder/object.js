//OBJECT CREATION
/*const rayArray=[
    'Ray',
    'roy',
    2047-2020,
    'officer',
    [20,30,40]
];
//key value pair
const ray={
    firstName:'Ray',
    lastName:'roy',
    age:2047-2020,
    job:'officer',
    payment:[a,b,c]
}
*/
//DOT & BRACKET NOTAION
const ray={
    firstName:'Ray',
    lastName:'roy',
    age:2047-2020,
    job:'officer',
    payment:[20,30,40]
}

console.log(ray);
console.log(ray.lastName);//dot notation
console.log(ray['lastName']);//Bracket notation

//difference betn two

const nameKey='Name';
console.log(ray['first'+nameKey]);
console.log(ray['last'+nameKey]);

/*var xy=prompt('choose in betn above one option. firstName,lastName & job');
//console.log(ray.interestedIn); -o/p --undefined.dot notaion
//console.log(ray[xy]);

if (ray[xy]){
    console.log(ray[xy])
}
else{
    console.log('wrong request');
}
*/
ray.location='paris';
ray['email']='rayemail.com';
console.log(ray);

const emly={
    fName:'Ray',
    lName:'roy',
    birthYear:2020,
    job:'officer',
    payment:[20,30,40],
    hasDrivencar:true,

    calcAge:function(birthYear){
 return 2037-birthYear;
    }
};

const calcAge =function(birthYear) {
    return 2037-birthYear;
}

console.log(emly.calcAge(1990));



/*calcAge : function() {
    console.log(this);
    return 2037-this.birthYear;
}*/


const resturants={
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

const {name,starterMenu,openingHours}=resturants;
console.log(name,starterMenu,openingHours);

const {name:urname,starterMenu:sMenu,openingHours:oHours}=resturants;
console.log(urname,oHours,sMenu);

//If we want to input default value

const {menu=[],starterMenu:s1Menu=[]}=resturants;
console.log(menu);

const {fri:{open,close}}=openingHours;
console.log(open,close);

