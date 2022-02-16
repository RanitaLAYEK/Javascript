const calAge=function(birthYear){
    return 2037-birthYear;
}

const yearsUnitRetirement=(birthYear,firstName)=>{
    const age =calAge(birthYear);
    const retirement=65-age;
    //return retirement;
   // return `${firstName} return ${retirement} years`;


/*
const yearsUnitRetirement=function(birthYear,firstName){
    const age =2037-birthYear;
    const retirement=65-age;
    //return retirement;
    return `${firstName} return ${retirement} years`;
}
*/

if(retirement>0){
    return retirement;
    }else {
        return -1;
        console.log(`${firstName} return ${retirement} years`);
    }
}
console.log(yearsUnitRetirement(1991,'Jonas'));
console.log(yearsUnitRetirement(1995,'pack'));

//function declearartion--function that can be used before its decleared.
//function expression--a function value stored in a variable.
//Arrow function--one line keyword.