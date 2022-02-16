function cutfruitPieces(fruit){
    return fruit*4;
}
function fruitProcessor(apples,oranges){
    //one function in another function
    const applePieces=cutfruitPieces(apples);
    const orangePieces=cutfruitPieces(oranges);
    console.log(apples,oranges);
    const juice=`juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;  
   }
   console.log(fruitProcessor(3,2));