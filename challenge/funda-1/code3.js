const scoreDolphin=(96+108+89)/3;
const scoreKoalas=(88+91+110)/3;

//console.log(scoreDolphin,scoreKoalas)
//Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
if(scoreDolphin>scoreKoalas){
    console.log('Good student Dolphin');
}
else if (scoreKoalas>scoreDolphin){
    console.log('Good student Koalas');
}
else if(scoreDolphin===scoreKoalas){
    console.log('Both win');
}

//Bonus 1:
const scoreDolphin1=(97+112+101)/3;
const scoreKoalas1=(109+95+123)/3;
console.log(scoreDolphin1,scoreKoalas1);

if(scoreDolphin1>scoreKoalas1 && scoreDolphin1>=100){
    console.log('Good student Dolphin');
}
else if (scoreKoalas>scoreDolphin &&scoreKoalas>=100){
    console.log('Good student Koalas');
}
else if(scoreDolphin===scoreKoalas){
    console.log('Both win');
}

//Bonus 2: 
const scoreDolphin2=(97+112+101)/3;
const scoreKoalas2=(109+95+106)/3;
console.log(scoreDolphin2,scoreKoalas2);

