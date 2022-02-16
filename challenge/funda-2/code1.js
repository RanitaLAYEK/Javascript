const calcAverage=(a,b,c)=>(a+b+c)/3;
console.log(2,3,5);

scoreDolphins=calcAverage(44,23,71);
scoreKoalas=calcAverage(65,54,49);
console.log(scoreDolphins,scoreKoalas);


const checkWinner=function(avgDolphins,avgKoalas){
if(avgDolphins>=2*avgKoalas){
    console.log(`Dolphins win the trophy ${avgDolphins} vs ${avgKoalas}`);
}else if(avgKoalas>=2*avgDolphins) {
    console.log(`Koalas win the trophy ${avgKoalas} vs ${avgDolphins}`);  
}
else{
    console.log('No one wins')
}
}
checkWinner(scoreDolphins,scoreKoalas);
checkWinner(86,98);