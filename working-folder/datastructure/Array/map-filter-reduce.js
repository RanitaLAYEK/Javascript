'use strict'

/*MAP creates a new array from original array
Filter creates a new array after satisfy the condition
Reduce=by adding all the array element

*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd=1.1;

/*const movementsUSD=movements.map(function(mov){
return mov*eurToUsd;
})*/

const movementsUSD=movements.map(mov=> mov*eurToUsd);
console.log(movementsUSD);



const movementsUSDfor=[];
for(const mov of movements)movementsUSDfor.push(mov*eurToUsd);
console.log(movementsUSDfor);

//========================================================================

const arr=[5,1,3,4,8];

function double(x){
 return x*2;
}

function binary(y){
  return y.toString(2);
}

const output=arr.map(double);
const output1=arr.map(binary);
console.log(output1);

const arr1=[7,8,9,4,6];

function isOdd(x){
  return x%2;
}
const output2=arr1.filter(isOdd);
console.log(output2);

function isEven(x){
  return x%2===0;
}
const output3=arr1.filter(isEven);
console.log(output3);

//REDUCE ----SUM OR MAXIMUM NUMBER IN ARRAY

const arr2=[2,5,7,8,9];

function findSum(arr2){
    let sum=0;
    for(let i=0;i<arr2.length;i++){
        sum=sum+arr2[i];
    }
    return sum;
}

console.log(findSum(arr2));

//acc=acumulator,current
//REDUCE syntax below
const output5=arr2.reduce(function(acc,current){
    acc=acc+current;
    return acc;
},0),

function findMax(arr2){
    let max=0;
    for(i=0;i<arr2.length;i++){
    if(arr2[i]>max){
      max=arr2[i];
    }
    }
    return max;
}

console.log(findMax(arr2));

const output4=arr2.reduce(function(acc,curr){
    if(curr>acc){
        acc=curr;
      }
},0)






