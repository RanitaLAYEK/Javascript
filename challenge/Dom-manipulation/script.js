/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='correct Number :'  textContent to read the property;
document.querySelector('.number').textContent=12;
document.querySelector('.score').textContent=70;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value=23;*/


const secretNumber=Math.trunc(Math.random()*20+1);
document.querySelector('.number').textContent=secretNumber;

let score=20;

document.querySelector('.check').addEventListener('click',function(){
const guess=Number(document.querySelector('.guess').value);
console.log(guess,typeof guess);



/*document.querySelector('.btn').addEventListener('click',function(){
    console.log(document.querySelector('.btn').textContent);  
    });*/


if (!guess) {
     document.querySelector('.message').textContent = '⛔️ No number!';
}else if(guess===secretNumber){
    document.querySelector('.message').textContent='correct Number :';
    //CSS style manipulation
    
} else if(guess>secretNumber){
    if(score>0){
        document.querySelector('.message').textContent='Too high:';
        score--;
        document.querySelector('.score').textContent=score;  
    }else {
        document.querySelector('.score').textContent='You loose the game';
    }
}else if(guess<secretNumber){
    document.querySelector('.message').textContent='Too low:';
    score--;
    document.querySelector('.score').textContent=score;
}

    });