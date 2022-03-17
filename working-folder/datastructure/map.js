'use  strict'

//map values to keys
//object & map diff==in map  keys has any type but in object keys are strings

const rest=new Map();
rest.set('name','classio italina');
rest.set(2,'italy');
rest.set(3,'portugal');
console.log(rest.set(2,'italy'));

//set method returns the updated map,allow us to chain method 

rest.set('categories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open',11)
.set('close',24)
.set(true,'we are open..')
.set(false,'we are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time=21;
rest.get(time>rest.get('open')&& time<rest.get('close'));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);

rest.set([1,2],'Test');
console.log(rest.get([1,2]));//o/p-undefined
const question= new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again!'],
  ]);
  console.log(question);

  /*convert object to Map
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
      }
    
    }*/
  /*console.log(Object.entries(openingHours));
const HoursMap=new Map(Object.entries(openingHours));
console.log(HoursMap);
*/
    
console.log(question.get('question'));
for(const [key,value] of question){
    //for object for(const [key,value] of object.entries)
if(typeof key==='number')console.log(`Answer:${key}:${value}` );
}
const answer=Number(prompt('your Answer '));
console.log(answer);

/*if(question.get('correct')===answer){
    console.log('its correct');
}*/
console.log(question.get(question.get('correct')===answer));

//MAP to AN Array
console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());




