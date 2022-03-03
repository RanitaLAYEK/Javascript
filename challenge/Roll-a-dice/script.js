'use strict';
//id selection
//select element
const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');



const diceEl=document.getElementById('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');

//starting condition
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');

let currentScore=0;

//Rolling dice functionality
btnRoll.addEventListener('click',function(){
    //1.generating a random nice roll
  const dice=Math.trunc(Math.random()*6)+1;

    //display the roll
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.jpg`;
    //src attribute change


    //check the dice1 ,roll,move to next 

    if(btnRoll!==1){
        //add dice to current score
      currentScore=currentScore+dice;
      current0El.textContent=currentScore;//change later.
    }else {

    }

})

