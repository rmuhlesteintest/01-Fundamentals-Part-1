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
// Variable Name Conventions:
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
// Match Operators:
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);
// ____________________________________________
// Assignment Operators:
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x-1 = 100
x--; // x = x-1 = 99
console.log(x);
// ____________________________________________
// Comparison Operators:
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
// Assignment:
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
// Challenge #1:

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
_______________________________________________
// Strings & Template Literals:
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
// Taking Decisions (if / else Statements):

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license.');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 2021;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
} 
console.log(century);
//_____________________________________________
// Challenge #2:

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's!")
} else {
    console.log("John's BMI is higher than Mark's!")
}

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}
//_____________________________________________
//Type Conversion and Coercion:

//Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18)

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//Type Coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

//_____________________________________________
// Truthy and Falsey Values:
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jones'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined')
} else {
    console.log('Height is UNDEFINED')
}
//_____________________________________________
// Equality Operators == vs. ===:
// === Strict Equality Operator (does not perform type coerciion. It only returns true when both values are exactly the same. Recommended to use. )
// == The Loose Equality Operator (does type coercion. Avoid using if you can. Won't be as clean of code if you use.) 
// !== Strict Not Equal Operator

const age = '18';
if (age === 18) console.log('You just became an adult. (strict)');

if (age == 18) console.log('You just became an adult. (loose)');

const favorite = Number (prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
    console.log('Cool! 23 is an amazing number!')
} else if (favorite === 7) {
    console.log(`7 is also a cool number`)
} else if (favorite === 9) {
    console.log(`9 is also a cool number`)
} else {
    console.log(`Number is not 23, 7 or 9`)
}

if (favorite !== 23) console.log(`Why not 23?`);
//_____________________________________________
// Boolean Logic:

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive...')
// }
    
const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive...')
}

//_____________________________________________
// Challenge #3:

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy');
} else if (scoreDolphins < scoreKoalas) {
    console.log('Koalas win the trophy');
} else {
    console.log('Both win the trophy');
}
//_____________________________________________
// Bonus #1:

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >=100) {
    console.log('Dolphins win the trophy');
} else if (scoreDolphins < scoreKoalas && scoreKoalas >=100) {
    console.log('Koalas win the trophy');
} else {
    console.log('Both win the trophy');
}

//_____________________________________________
// Bonus #2:

const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy');
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy');
}  else {
    console.log('No one wins the trophy');
}
 */
//_____________________________________________
// The Switch Statement:


