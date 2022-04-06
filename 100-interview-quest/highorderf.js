'use strict'

const radius=[1,2,3,4];

const calcArea=function (radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i]);
    }
    return output;
}
console.log(calcArea(radius));

//circumferance

const calCircumference=function (radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(2*Math.PI*radius[i]);
    }
    return output;
}
console.log(calCircumference(radius));

const calcDiameter=function (radius){
   const output=[];
   for(let i=0;i<radius.length;i++){
       output.push(2*radius[i]);
   }
   return output;
}
console.log(calcDiameter(radius));



