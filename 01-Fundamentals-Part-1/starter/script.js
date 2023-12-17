/*
// Variables and Values lecture

let js = "amazing";

console.log(40 + 8 + 23 - 10);

console.log(23);

let firstName = "Matilda";

// Variable name conventions

let jonas_matilda = "JM";
let $function = 27;

let person = "Jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let mySecondJob = "Teacher";

let javascriptIsFun = true;
console.log(javascriptIsFun);

// Data types lecture

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

// Let, const and var lecture

const birthYear = 1991;

var job = "Programmer";
job = "Teacher";

lastName = "Schmedtmann";
console.log(lastName);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

// Basic operators lecture

console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

let x = 10 +5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

// Operator precedence lecture

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let z, y;
z = y = 25 - 10 - 5;
console.log(z, y);

const averageAge = (ageSarah + ageJonas) / 2;
console.log(ageSarah, ageJonas, averageAge);

const firstName = "Jonas";
const job = "Teacher";
const birthYear = 1991;
const year = 2037;

// Strings and template literals lecture

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(`String with
             multiple
             lines`);

console.log("String with \n\
             multiple \n\
             lines");

// If statements lecture

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough)
{
    console.log("Sarah can start her driving license");
}
else
{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years:)`);
}

const birthYear = 2001;
let century;
if (birthYear <= 2000)
{
    century = 20;
}
else
{
    century = 21;
}

console.log(century);

// Type conversion lecture

const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(String(23));

console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

// Equality operators lecture

const age = 18;
if (age === 18)
{
    console.log("You just became an adult");
}

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);

if (favourite === 23)
{
    console.log("Cool! 23 is an amazing age.");
}
else if (favourite === 7)
{
    console.log("SIUUUUUUUUUU");
}
else if (favourite === 9)
{
    console.log("Cool! 9 is also a cool number);
}
else
{
    console.log("Number is neither 23, nor 9, nor 7.");
}

if (favorite !== 23) console.log("Why not 23?");

// Logical operators lecture

const hasDrivingLicense = true;
const hasGoodVision = true;

console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);
console.log(!hasDrivingLicense);

const isTired = true;
console.log(hasDrivingLicense && hasGoodVision && isTired);
if (hasDrivingLicense && hasGoodVision && !isTired)
{
    console.log("Sarah is able to drive");
}
else
{
    console.log("Someone else should drive");
}
*/

const day = "monday";

switch (day)
{
    case "monday":
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
        break;
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("record_videos");
        break;
    case "saturday":
        break;
    case "sunday":
        console.log("Enjoy the weekend!");
        break;
    default:
        break;
}
