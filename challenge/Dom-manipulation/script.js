/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='correct Number :';
document.querySelector('.number').textContent=12;
document.querySelector('.score').textContent=70;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value=23;*/

const x=function(){
    console.log(21);
}
document.querySelector('.check').addEventListener('click',function(){
const guess=Number(document.querySelector('.guess').value);
console.log(guess,typeof guess);
});


document.querySelector('.btn').addEventListener('click',function(){
    console.log(document.querySelector('.btn').textContent);
});