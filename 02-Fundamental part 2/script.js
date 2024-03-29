// fucntion
// basic array operation
// loop

"use strict";

/*
///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


///////////////////////////////////////
// Functions
function logger() {
  console.log('My name is Yogeshwar');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


///////////////////////////////////////
// Arrow functions

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Yogeshwar')); console.log(yearsUntilRetirement(1980, 'Bob'));


///////////////////////////////////////
// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));


///////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired `);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Yogeshwar'));
console.log(yearsUntilRetirement(1950, 'Mike'));




///////////////////////////////////////
// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Yogeshwar';
const Yogeshwar = [firstName, 'karnar', 2037 - 1991, 'teacher', friends];
console.log(Yogeshwar);
console.log(Yogeshwar.length);

// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


///////////////////////////////////////
// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}



///////////////////////////////////////
// Introduction to Objects
const YogeshwarArray = [
  'Yogeshwar',
  'karnar',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const Yogeshwar = {
  firstName: 'Yogeshwar',
  lastName: 'karnar',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};


///////////////////////////////////////
// Dot vs. Bracket Notation
const Yogeshwar = {
  firstName: 'Yogeshwar',
  lastName: 'karnar',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(Yogeshwar);

console.log(Yogeshwar.lastName);
console.log(Yogeshwar['lastName']);

const nameKey = 'Name';
console.log(Yogeshwar['first' + nameKey]);
console.log(Yogeshwar['last' + nameKey]);

// console.log(Yogeshwar.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Yogeshwar? Choose between firstName, lastName, age, job, and friends');

if (Yogeshwar[interestedIn]) {
  console.log(Yogeshwar[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

Yogeshwar.location = 'Portugal';
Yogeshwar['twitter'] = '@Yogeshwarschmedtman';
console.log(Yogeshwar);

// Challenge
// "Yogeshwar has 3 friends, and his best friend is called Michael"
console.log(`${Yogeshwar.firstName} has ${Yogeshwar.friends.length} friends, and his best friend is called ${Yogeshwar.friends[0]}`);


///////////////////////////////////////
// Object Methods

const Yogeshwar = {
  firstName: 'Yogeshwar',
  lastName: 'karnar',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYeah;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${Yogeshwar.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log(Yogeshwar.calcAge());

console.log(Yogeshwar.age);
console.log(Yogeshwar.age);
console.log(Yogeshwar.age);

// Challenge
// "Yogeshwar is a 46-year old teacher, and he has a driver's license"
console.log(Yogeshwar.getSummary());




///////////////////////////////////////
// Iteration: The for Loop

// console.log('Lifting weights repetition 1 ');
// console.log('Lifting weights repetition 2 ');
// console.log('Lifting weights repetition 3 ');
// console.log('Lifting weights repetition 4 ');
// console.log('Lifting weights repetition 5 ');
// console.log('Lifting weights repetition 6 ');
// console.log('Lifting weights repetition 7 ');
// console.log('Lifting weights repetition 8 ');
// console.log('Lifting weights repetition 9 ');
// console.log('Lifting weights repetition 10 ');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} `);
}


///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
const Yogeshwar = [
  'Yogeshwar',
  'karnar',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];

// console.log(Yogeshwar[0])
// console.log(Yogeshwar[1])
// ...
// console.log(Yogeshwar[4])
// Yogeshwar[5] does NOT exist

for (let i = 0; i < Yogeshwar.length; i++) {
  // Reading from Yogeshwar array
  console.log(Yogeshwar[i], typeof Yogeshwar[i]);

  // Filling types array
  // types[i] = typeof Yogeshwar[i];
  types.push(typeof Yogeshwar[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < Yogeshwar.length; i++) {
  if (typeof Yogeshwar[i] !== 'string') continue;

  console.log(Yogeshwar[i], typeof Yogeshwar[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < Yogeshwar.length; i++) {
  if (typeof Yogeshwar[i] === 'number') break;

  console.log(Yogeshwar[i], typeof Yogeshwar[i]);
}


///////////////////////////////////////
// Looping Backwards and Loops in Loops
const Yogeshwar = [
  'Yogeshwar',
  'karnar',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = Yogeshwar.length - 1; i >= 0; i--) {
  console.log(i, Yogeshwar[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} `);
  }
}


///////////////////////////////////////
// The while Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} `);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} `);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}
*/

///////////////////////////////////////
