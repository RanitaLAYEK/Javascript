//FUNCTIONS
//============
function logger(){
    //function body
    console.log('Hope is constant')
}
logger();//invoking/calling the function
logger();

function foodProcessor(apples,oranges){
 console.log(apples,oranges);
 const juice=`juice with ${apples} apples and ${oranges} orange.`;
 return juice;  
}

const juiceMug=foodProcessor(5,3);
console.log(juiceMug);

const appleOrangeJuice=foodProcessor(4,10);
console.log(appleOrangeJuice);

//Regular Functions & Arrow Function

const ray={
    year:1990,
    firstName:'suraj',

    calcAge:function(){
       // console.log(this);
        console.log(2040-this.year);
    const isMillian=function(){
        console.log(this);
        console.log(this.year>=1980 && this.year<=1995);
    }
    isMillian();
    },

greet:()=>{
    console.log(this);
    console.log(`Hey ${this.firstName}`);
}
}
ray.greet();
ray.calcAge();

//An arrow function inherit functions from parent scope

//Argument keywords

const exPrt=function(a,b){
    console.log(arguments);
    return a+b;
}

exPrt(2,5);
//o/p will be arrow

