//function expression

const calAge2=function(birthYear){
    return 2037-birthYear;
}

//ARROW FUNCTION

const calAge3=birthYear=>2037-birthYear;
const age3=calAge3(1990);
console.log(age3);

const yearsUnitRetirement=(birthYear,firstName)=>{
    const age =2037-birthYear;
    const retirement=65-age;
    //return retirement;
    return `${firstName} return ${retirement} years`;
}
console.log(yearsUnitRetirement(1990,'Mira'));
