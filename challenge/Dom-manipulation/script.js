/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='correct Number :'  textContent to read the property;
document.querySelector('.number').textContent=12;
document.querySelector('.score').textContent=70;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value=23;*/


let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //document.querySelector('.message').textContent refractoring creat function

    const displayMessage=function(message){
        document.querySelector('.message').textContent=message;
    }



    /*document.querySelector('.btn').addEventListener('click',function(){
        console.log(document.querySelector('.btn').textContent);  
        });*/


    if (!guess){
        displayMessage('No number!');
    }/* {
        document.querySelector('.message').textContent = '⛔️ No number!';
    } */else if (guess === secretNumber) {
        //document.querySelector('.message').textContent = 'correct Number :';
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('correct Number ');
        
        //CSS style manipulation
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess !== secretNumber) {
        if (score > 1) {
            //Refractoring 
            document.querySelector('.message').textContent = guess>secretNumber ?'Too high' :'Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 'You loose the game';
            document.querySelector('.score').textContent = 0;
        }
    }


    /*else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high:';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 'You loose the game';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'Too low:';
        score--;
        document.querySelector('.score').textContent = score;
    }else {
        document.querySelector('.score').textContent = 'You loose the game';
        document.querySelector('.score').textContent = 0;
    }
    */
    document.querySelector('.again').addEventListener('click', function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20 + 1);
        document.querySelector('.message').textContent = 'start guessing...';
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = 'rgb(189, 171, 171)';
        document.querySelector('.number').style.width = '15rem';

    })

});

    //REFRACTORING--remove the duplicate code used multiple time in app.
