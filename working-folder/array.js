const friends=['bob','builder','oswald'];
console.log(friends);

const year=new Array(1990,1992,1994,1996);
    console.log(year);
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

const years=[1990,1992,1994,1996];
//console.log(calcAge(years));
 
const age1=calcAge(years[0]);
const age3=calcAge(years[years.length-1]);
console.log(age1,age3);

const ages=[calcAge(years[0],calcAge(years[years.length-1]))];
console.log(ages);

//Array Push pop

const threads=['jemmy','groot','lambart'];
threads.push('joy');//push used for adding element in end of the array
console.log(threads);

//element add begining of the array
threads.unshift('ray');
console.log(threads);
//Remove elements
threads.pop();
console.log(threads);
//remove first element 
threads.shift();
console.log(threads);

console.log(threads.indexOf('jemmy'));
console.log(threads.includes('bob'));
