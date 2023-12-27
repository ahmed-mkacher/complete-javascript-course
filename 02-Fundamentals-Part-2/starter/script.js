/*
// Strict mode lecture

"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;

// Functions lecture

function logger()
{
    console.log(`My name is Ahmed`);
}

// calling / running / invoking, a function
logger();
logger();
logger();

function fruitProcessor(apples, oranges)
{
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apple and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Function declaration vs expression

// Function declaration
function calcAge1(birthYear)
{
    return 2037 - birthYear;
}

const age1 = calcAge1(1800);
console.log(age1);

// Function expression
const calcAge2 = function(birthYear)
{
    return 2037 - birthYear;
}

const age2 = calcAge2(1800);

console.log(age1, age2);

// Arrow functions

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1800);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

// Functions calling other functions lecture

function cutFruitPieces(fruit)
{
    return fruit * 4;
}

function fruitProcessor(apples, oranges)
{
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

// Arrays lecture

const friend1 = "Micheal"
const friend2 = "Gabriel";

const years = new Array(1991, 2001, 2002, 2003);

console.log(years[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[0] = "Adrian";

const firstName = "Ahmed";
const ahmed = [firstName, "Mkacher", 2023 - 2003, "student", friends];
// Basic array operations lectue

const friends = ["Gabriel", "Micheal"];
const newLength = friends.push("Jay");

friends.unshift("John");
const popped = friends.pop();
console.log(popped);

console.log(friends);
console.log(newLength);

console.log(friends.indexOf("Bob"));
console.log(friends.includes("Bob"));

friends.unshift("Peter")

if (friends.includes("Peter"))
{
    console.log("You have a friend called Peter");
}
*/
