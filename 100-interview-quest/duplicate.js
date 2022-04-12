let arr=[1,2,3,4,5,7,8,8,8,46,9,20,30,20,1,1,4,8,70];

let newArr=[...new Set(arr)];
console.log(newArr);

/*
o/p-
[
   1,  2,  3, 4,  5,
   7,  8, 46, 9, 20,
  30, 70
]
*/