// let js ='amazing';
//         //if(js==='amazing')
//            //alert('Its FUN time');

//            console.log(40+10);
//            /*
//          Multiline commnet

//            */

//            console.log('Jonas');

//            /*let firstName="ram";
//            console.log(firstName);
//            */

//            let javascriptIsFun=true;
//            console.log(javascriptIsFun);

//            let myFirstJob ='Assistant';
//            let mySecondJob="Havard";

//            console.log(myFirstJob);
//            console.log(mySecondJob);

//            console.log(typeof true);
//            console.log(typeof javascriptIsFun);
//            console.log(typeof 23);
//            console.log(typeof "Havard");

//            javascriptIsFun='RAM';
//            console.log(typeof javascriptIsFun);

//            //undefined means empty value

//            let year;
//            console.log(year);
//            console.log(typeof year);

//            year=1992;
//            console.log(year);
//            console.log(typeof year);

//            console.log(typeof null);

//            /*const a=10;
//            a=30;  not possible due to const variable
           
//            var a=10;
//            a=40;*/

// const ajyr=2031-1992;
// const ageu=2037-2000;
// console.log(ajyr,ageu);
// console.log(ajyr*2,ageu/2,2**3);

// //2**3 means 2 to the power 3

// const firstName='rik';
// const lastName='ban';

// console.log(firstName+" "+lastName);
// //Asignment operator.
// let x=10+5;
// x+=10;
// console.log(x);
// x++;
// x--;
// console.log(x);

// //comparison operator
// console.log(ajyr>ageu);//>, < ,>=,<=

// const ab=2050;
// const ageOfs=ab-2000;
// const ageOfr=ab-2010;
// console.log(ab-2000>ab-2010);
// const avarageAge=(ageOfs+ageOfr)/2;
// console.log(avarageAge);


const firstName='salama';
const job='Media';
const birthYear=1980;
const year=2037;

//console.log("I'm" +''+firstName +',a'+(year-birthYear)+'years old.'+job);

//Another way

const salama=`I'm ${firstName},a ${year-birthYear} year old ${job}`;
console.log(salama);

console.log(`string with \n whoooooooo`);

//IF ELSE CODE

const age=10;
//const isOldEnough=age=>18;
if(age>18){
  console.log('Old Enough to get license');
}
else{
  console.log(':)') ;
}

const inputYear='1910';
//console.log(inputYear+20);
console.log(Number(inputYear),inputYear);
console.log(inputYear+20);

console.log(Number('rakl'));
console.log(String(21));

console.log(`I'm 29 'years old'`);

let n ='1'+1;
n=n-1;
console.log(n);

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean('qatar'));
console.log(Boolean({}));

//Equality operator == & ===

const rAge=20;
if(rAge===20)console.log('you are an adult');

// const fav=prompt('whats your lucky number');
// console.log(fav);

/*if(fav==25){ //'25'==25 its same value here ignoring type of the value ,here string & number. 
  console.log('cool! 25 is amazing');
}

const nFav=prompt('please say the number');
if (nFav===23){
  console.log('OMG');
}
else if(nFav===7) {
  console.log('turn over');
}
else if(nFav==56) {
  console.log('he he');
}
else{
  console.log('BOOM!')
}*/

const hasDriverLicense=true;
const hasGoodVision=false;

console.log(hasDriverLicense && hasGoodVision );
console.log(hasDriverLicense || hasGoodVision );

const shouldDrive= hasDriverLicense && hasGoodVision;

if(shouldDrive){
  console.log('sarah is able to drive');
}else{
  console.log('someone should drive....');
}

const isTired=true;
console.log(hasDriverLicense||hasGoodVision & isTired);
if(hasDriverLicense||hasGoodVision & isTired){
  console.log('sarah is able to drive..');
}else{
  console.log('someone should drive....');
}

const day1='Friday';
switch(day1){ //day1===monday
  case 'Monday':
  console.log('Plan for entire day');
  break;
  case 'Tuesday':
  console.log('started');
  break;
  case 'Wednesday':
  console.log('A happy day');
  break;
  case 'Thursday':
  console.log('Feeling Good');
  break;
  case 'Friday':
  console.log('Happy weekend');
  break;
  default:
console.log('Not a valid date');
}

//Ternary Operator
const age1=3;
age1>=18?console.log('I like to drink taquila'):console.log('I like to drink water');
//========If condition ====else is mandatory=====else==================================

let drink2;
if (age1>=18){
  drink2='wine';
}else{
  drink2='water';
}
console.log(`i like to drink ${drink2} `);

