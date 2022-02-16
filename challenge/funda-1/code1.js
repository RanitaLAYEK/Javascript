
const markMass=78;
const johnMass=95;

const markHight=1.69;
const johnHight=1.95;



const markBMI=markMass/markHight**2;
const johnBMI=johnMass/(johnHight*johnHight);

console.log(markBMI,johnBMI);

const higherBMI=markBMI>johnBMI;
console.log(higherBMI);

/*if (markBMI>johnBMI){
console.log('GOOD JOB');
}
else{
    console.log('come Later');
}*/
