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

const interestedIn = prompt('choose betn above one option.job');
//console.log(ray.interestedIn); -o/p --undefined.dot notaion
console.log(ray['interestedIn']);



