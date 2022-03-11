/*
write a function that excepts more arguments & then use the spread operator to pass those arguments
*/

'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    orderPasta:function(ing1, ing2, ing3) {

        console.log(`Here is your ${ing1} ,${ing2} and ${ing3} delicious pasta`);

    }
}

const ingredients=[prompt(`lets make pasta ingredient 1`)];
