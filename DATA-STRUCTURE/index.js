'use strict';
const restourant = {
  name: "Classico Italiano",
  location: "Via Angelo Tvanti 23,Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focacia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours:{
    thu:{
      open:8,
      close:11
    },
    Fri:{
      open:7,
      close:12
    },
    sat:{
      open:0,
      close:24,
    }
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery :function({
    mainIndexE = 0,
    starterIndexE = 1,
    address,
    time = '20:00'
  }){
  //   console.log(`order Received! 
  //  ${this.starterIndexE[starterIndexE]} and 
  //   ${this.mainIndexE[mainIndexE]}
  //     will be delivered to 
  //     ${address} at 
  //     ${time}`)
  },

  orderPasta:function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`)
  },
  orderPizza:function(mainIngredient, ...otherIngredient){
console.log(mainIngredient)
console.log(otherIngredient)
  }
};

restourant.orderDelivery({
time:'22:30',
address:'Kacyiru',
mainIndexE: 2,
starterIndexE: 2
})

const arr = [2, 3, 4];
const d = arr[0];
const b = arr[1];
const c = arr[3];
// distructuring an array;
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// const [first, second] = restourant.categories;
// console.log(first, second);
// const [first, , second] = restourant.categories;
// console.log(first, second);
let [main, secondary] = restourant.categories;
// console.log(main, secondary);

// main  would be any name of your choice
// switching variables
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);
console.log(restourant.order(2, 0));
// receive 2 return values from a function

const [starter, mainCourse] = restourant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2,1,[4,3]];
// const [i, ,j] = nested;
// console.log(i,j)
const [i,,[j,k]] = nested;
// this empty space is very important because if you didn't use it your code will excute an error
console.log(i,j,k)
//you can set default values during destructuring

// const [p, q, r] = [9,6]
// for this case it will return undefined
const [p=2, q=3, r=7] = [9,6]
console.log(p,q,r)

// The above course was all about destructuring array

// for this it is about destructuring objects

const {name,openingHours,categories} = restourant;
console.log(name,openingHours,categories)

const {name:restourantName, openingHours:hours, categories:tags} = restourant;
console.log(restourantName,hours,tags)
// you can set defaults value on the above objects
const {menu=[], starterMenu:starters = [], } = restourant;
console.log(menu,starters)

// object mutating variables

let a = 5;
let t = 6;
const obj = {a:45,t:14,f:78};
// we use blackets to destructure an object
({a,t} = obj)
console.log(a,t)

// nested object

const {Fri:{open, close}} = openingHours;
console.log(open,close)

// you can pass function into the object

// spread operator


const array = [4,5,7,9]
const badNewArray = [1,2,3,array[0],array[1],array[2],array[3]]
console.log(badNewArray)

// using spread operator:this is used when you need to take all element in array include it in other array
const newArr = [1,2,3, ...array]
console.log(newArr)
// spread operator can be used to console individual element
console.log(...newArr) 
// you can add also anathor things in array

const newA = [...restourant.mainMenu,'sweet potato']
console.log(newA)

// spread operator helps to get entire array but destructuring you can get some values from an array
// copy a array
const mainMenuCopy = [...restourant.mainMenu]
// join an array
const menuS = [...restourant.starterMenu, ...restourant.mainMenu]
console.log(menuS)

// Iterables:array,strings,maps,sets .not objects
const str = 'sandrine';
const letters = [...str,'','S']
console.log(letters)
// const ingredients = [prompt('Let\'s create pasta ingredient 1!'),
// prompt('Let\'s create pasta ingredient 2!'),
// prompt('Let\'s create pasta ingredient 3!')]
// // console.log(ingredients)

// restourant.orderPasta(...ingredients)

// objects can be used with spread operator even if it is not iterables

const newRestaurant = {founded :1990,
...restourant,
founder:'Sandrine'
}

console.log(newRestaurant)
// you can also make copy of original restaurant

const restaurantCopy = {...restourant}
restaurantCopy.name = 'UWUMUKIZA'
console.log(restaurantCopy.name)
console.log(restourant.name)

// SPREAD OPERATOR because it os right side of =
// destructuring
const ar = [1,2, ...[4,5]]
const [m,n, ...others] = [1,2,3,4,5]
console.log(m,n,others)

const [pizza,,resotto,...otherFoood] = [...restourant.mainMenu,...restourant.starterMenu]
console.log(pizza,resotto,otherFoood)

// objects

const {sat,...weekDays} = restourant.openingHours;
console.log(weekDays)

// Functions
// this passed parameter is called rest
const add = function(...numbers){
let sum = 0;
for(let i=0;i<numbers.length;i++)
sum +=numbers[i]
console.log(sum)
}
add(2,2,3)
add(2,2,3,4,5)
const xA= [2,6,9];
add(...xA)

restourant.orderPizza('mushrooms','onions','tomatoes','chickens')

// use any data type,return any data type,short-circuiting
// short circuiting will check the truth value if first value is true it will execute it 
console.log('----OR----')
console.log(3 || 'sandrine')
console.log('' || 'sandrine')
console.log(true || 0)
console.log(undefined || null)
console.log(undefined || 0 || '' || 'hello' || 2 || null)

// you can also set default value to the numGuest
// if you set this numGuest default value of zero it will not work
// // restourant.numGuest = 43
// const guest = restourant.numGuest ? restourant.numGuest : 10
// console.log(guest)

const guest2 = restourant.numGuest || 34
console.log(guest2)

console.log('----AND----')
// and operator is true when all conditions is true
console.log(0 && 'uwumukiza')
console.log('hello' && 4 && null && 'jonas') 

// practical exampkle

if(restourant.orderPizza){
  restourant.orderPizza('mushrooms', 'spinach')
}
// you can write the above code using and operator

restourant.orderPizza && restourant.orderPizza('cocoa', 'olive')

// Nullish coelacing operator this is where we deal with the default value of zero

restourant.numGuest = 0
const guest = restourant.numGuest ? restourant.numGuest : 10
console.log(guest)

// nullish value:null and undefined(NOT 0 and ')
const correctError = restourant.numGuest ?? 10

// Logical operator

const resto1 = {
  name:'Grace',
  numGuests:0
}
const resto2 = {
  name:'Faith',
  owner:'Sandrine'
}

// OR assignment operator is used for false statement
// resto1.numGuests = resto1.numGuests || 10
// resto2.numGuests = resto2.numGuests || 10
// resto1.numGuests ||=10
// resto2.numGuests ||=10

// Nullish assignment operator(null and undefined)
resto1.numGuests ??=10
resto2.numGuests ??=10

// AND operator
// resto2.owner = resto2.owner && '<ANONYMOUS'
// resto1.owner = resto1.owner && '<ANONYMOUS'

resto2.owner &&=  '<ANONYMOUS'
resto1.owner &&= '<ANONYMOUS'
console.log(resto1)
console.log(resto2)

// #coding challenge
// football betting app


const game = {
  team1:'APR',
  team2:'RayonSport',
  players:[
    [
      
        'fieldPlayer1',
        'fieldPlayer2',
        'fieldPlayer3',
        'fieldPlayer4',
        'fieldPlayer5',
        'fieldPlayer6',
        'fieldPlayer7',
        'fieldPlayer8',
        'fieldPlayer9',
        'fieldPlayer10',

    ],
    
      [
      
        'fieldPlayerT1',
        'fieldPlayerT2',
        'fieldPlayerT3',
        'fieldPlayerT4',
        'fieldPlayerT5',
        'fieldPlayerT6',
        'fieldPlayerT7',
        'fieldPlayerT8',
        'fieldPlayerT9',
        'fieldPlayerT10',

    ], 
  ],
  score:'4.0',
  scored:['a','b','c'],
  date:'09,February,2024',
  odds:{
    team1:1.36,
    x:3.5,
    team2:6
  }

}

// 1
const [players1,players2] = game.players
// 2
const [gk,...fieldPlayers] = players1;
console.log(gk,fieldPlayers)
// 3
const allPlayers = [...players1,...players2]
console.log(allPlayers)
// 4
const players1Final = [...players1,'sandrine','divine','Aurole']
// 5

const {odds:{team1,x:draw,team2}} = game;
console.log(team1,draw,team2)
// 6
const printGoals = function(...players){
  // console.log(players)
  console.log(`${players.length} goal were scored`)
}
// printGoals('Yves','Fabrice','Sadio','Mane ')
// printGoals('Yves','Fabrice')
printGoals(...game.scored)

// 7
team1 < team2 && console.log('tea1 is more likely to win')

// LOOP AND ARRAYS

const menus = [...restourant.starterMenu, ...restaurant.mainMenu]

for(const item of menus)console.log(item)
for(const item of menus.entries()){
  console.log(`${item[0] +1} ${item[1]}`)
}
console.log([...menus.entries()])







