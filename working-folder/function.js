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