/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log('23');

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);
// ____________________________________________
// Variable name conventions
let jonas_matilda = 'JM'
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990
// const job;

var job = 'programmer';
job = 'teacher'

// lastName = 'Muhlestein';
// console.log(lastName);
// ____________________________________________
// Match operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);
// ____________________________________________
// Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x-1 = 100
x--; // x = x-1 = 99
console.log(x);
// ____________________________________________
// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);
// ____________________________________________
// Assignment
const country = 'United States';
const continent = 'North America';
let population = 326;

console.log(country);
console.log(continent);
console.log(population);

var isIsland = false;
const language = 'English';

population = 327; // Correct: Allowed to change let declaration
isIsland = true; // Incorrect: Not allowed to change const declaration. But, changing from const to var to remove error

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

console.log(population / 2);
population++;
console.log(population);

finlandPopulation = 6;
console.log(population > finlandPopulation);
avgPopulation = 33;
console.log(population < avgPopulation);
const description =
    country +
    ' is in ' +
    continent +
    ', and its ' +
    population +
    ' million people speak ' +
    language;
console.log(description);
// ____________________________________________
// Coding Challenge #1

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
_______________________________________________
*/
// Strings & Template Literals
const firstName = 'Rex';
const job = 'QA Engineer';
const birthYear = '1974';
const currentYear = '2023';

const Rex = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' year old ' + job + '!';
console.log(Rex)

const rexNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`;
console.log(rexNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
//_____________________________________________
// Taking Decisions: if / else Statements
console.log("change")