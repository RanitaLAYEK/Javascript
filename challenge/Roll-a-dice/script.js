'use strict';
//id selection
//select element
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');
const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');



const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');

//starting condition
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');

const scores=[0,0];
let currentScore=0;
let activePlayer=0;
let playing=true;

//Rolling dice functionality
btnRoll.addEventListener('click',function(){
    //1.generating a random nice roll
  const dice=Math.trunc(Math.random()*6)+1;
     console.log(dice);
    //display the roll
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.jpg`;
    //src attribute change


    //check the dice1 ,roll,move to next 

    if(dice!==1){
        //add dice to current score
      currentScore=currentScore+dice;
     // current0El.textContent=currentScore;//change later.
      document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    }else {
        //Switch to next player.
        document.getElementById(`current--${activePlayer}`).textContent=0;
        currentScore=0;
    activePlayer = activePlayer === 0?1:0;
    //toggle method=add & remove the class

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    
    }

})

btnHold.addEventListener('click',function(){
    //add current score to the active player
scores[activePlayer]+= currentScore;
document.getElementById(`current--${activePlayer}`).textContent=scores[activePlayer];

    //check if the active score >=100

if (scores[activePlayer]>=20){
    playing=false;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
}else{
    document.getElementById(`current--${activePlayer}`).textContent=0;
currentScore=0;
activePlayer = activePlayer === 0?1:0;
//toggle method=add & remove the class

player0El.classList.toggle('player--active');
player1El.classList.toggle('player--active');
}

    //finish the game

    //switch to next player

})