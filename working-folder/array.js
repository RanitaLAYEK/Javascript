const friends=['bob','builder','oswald'];
console.log(friends);

const years=new Array(1990,1992,1994,1996);
    console.log(years);
//'monty','carlo','stephen')

console.log(friends[0],friends[1]);

console.log(friends.length);//to define length
console.log(friends[friends.length-1]);

friends[2]='Jay';
console.log(friends);

//different values
const uname=['Jonas','ray',1993,'teach'];
console.log(uname);

//Exercise
//============

const calcAge=function(birthYear){
    return 2037-birthYear;
}

const year=[1990,1992,1994,1996];
//console.log(calcAge(years));
 
const age1=calcAge(years[0]);
const age3=calcAge(years[years.length-1]);
console.log(age1,age3);

const ages=[calcAge(years[0],calcAge(years[years.length-1]))];
console.log(ages);