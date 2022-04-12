'use strict'
let arr1=[4,6,7,9,10];
let arr2=[9,7,10,4,6]

const isCompare=arr1.length==arr2.length && arr1.every((currentElement)=>{
  if(arr2.indexOf(currentElement)>-1){
      return (currentElement=arr2[arr2.indexOf(currentElement)]);
  }
})
console.log(isCompare);