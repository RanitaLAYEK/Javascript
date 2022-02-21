for(let rep=1;rep<=10;rep++){
    console.log(`Lifting weights repetion ${rep}`);
}


var ray=[
    'Ray',
   'roy',
    2047-2020,
    'officer',
    [20,30,50]

]
const types=[];
for(let i=0; i<ray.length-1; i++){
console.log(ray[i],typeof ray[i]);
types[i]=typeof ray[i];
}

console.log(types);


const years=[1990,1993,1995,1997,1999];
const age=[];

for(let i=0;i<years.length;i++){
    age.push(2037-years[i]);
    console.log(age);
}

//continue & break
//=================

for (let i=0;i<years.length;i++){
if(typeof ray[i] !=='string')continue;
}

var john=[
    'Ray',
   'roy',
    2047-2020,
    'officer',
    [20,30,50]

]

for(let i=john.length-1;i>=0;i--){
    console.log(i,john[i]);
}

for(let exercise=1;exercise<4;exercise++){
    console.log(`starting exercise ${exercise}`);

for(let rep=1;rep<6;rep++){
    console.log(`lifting exercise ${rep}`);
}
};


for(let rep=1;rep<=10;rep++){
    console.log(`lifting exercise ${rep}`);
}

let rep=1;
while(rep<=10){
    console.log(`lifting weight repition ${rep}`);
    rep++;
}

let rollDice=Math.trunc(Math.random()*6)+1;
while(rollDice!==6){
 console.log(`u rolled dice ${rollDice}`);
 rollDice=Math.trunc(Math.random()*6)+1;
 if(rollDice===6) console.log('you did it');
}


