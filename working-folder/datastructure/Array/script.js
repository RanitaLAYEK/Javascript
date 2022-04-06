'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////

const displayMovement = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    //template literals
    const html = `<div class="movements__row"> 
  <div class="movements__type movements__type--${type}">${i + 1}${type}</div>
  <div class="movements__value">${mov}</div>
</div>`
    containerMovements.insertAdjacentHTML('afterbegin', html);


    //to add new html line in main page,it accept two string "afterbegin"--Just inside the element, before its first child. thats means write new child element after begining of parent element

  })

}

displayMovement(account1.movements);
/*console.log(containerMovements.innerHTML);
 ---o/p  containerMovements.innerHTML
<div class="movements__row"> 
  <div class="movements__type movements__type--deposit">8deposit</div>
  <div class="movements__value">1300</div>
</div><div class="movements__row"> 
  <div class="movements__type movements__type--deposit">7deposit</div>
  <div class="movements__value">70</div>
</div><div class="movements__row"> 
  <div class="movements__type movements__type--withdrawal">6withdrawal</div>
  <div class="movements__value">-130</div>
</div><div class="movements__row"> 
  <div class="movements__type movements__type--withdrawal">5withdrawal</div>
  <div class="movements__value">-650</div>
</div><div class="movements__row"> 
  <div class="movements__type movements__type--deposit">4deposit</div>
  <div class="movements__value">3000</div>
</div><div class="movements__row"> 
  <div class="movements__type movements__type--withdrawal">3withdrawal</div>
  <div class="movements__value">-400</div>
</div><div class="movements__row"> 
  <div class="movements__type movements__type--deposit">2deposit</div>
  <div class="movements__value">450</div>
</div><div class="movements__row"> 
  <div class="movements__type movements__type--deposit">1deposit</div>
  <div class="movements__value">200</div>
</div>
*/

const user='Steven Thomas Williams';
const userName=user.toLowerCase().split(' ');
console.log(userName);

/////////////////////////////////////////////////const userName=user.toLowerCase().split('')=s', 't', 'e', 'v', 'e', 'n', ' ', 't', 'h', 'o', 'm', 'a', 's', ' ', 'w', 'i', 'l', 'l', 'i', 'a', 'm', 's']
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
const eurToUsd = 1.1;
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
})
console.log(movementsUSD);

//using foroff loop
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

//using arrow function
const movementsUSDarrow = movements.map(mov => mov * eurToUsd);
console.log(movementsUSDarrow);

const movementDescription=movements.map((mov, i)=> {
  if (mov > 0) {
    return(`Movement ${i + 1}:you deposited ${mov}`)
}
else {
  return(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
}
})
console.log(movementDescription);
