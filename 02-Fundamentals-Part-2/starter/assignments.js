/*
"use strict";

// Functions lecture assignment

function describeCountry(country, population, capitalCity)
{
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

console.log(describeCountry("Tunisia", 12, "Tunis"));
console.log(describeCountry("USA", 360, "Washington DC"));
console.log(describeCountry("China", 1400, "Beijing"));

// Function declaration vs expression lecture assignment

function percentageOfWorld1(population)
{
    return 100 * population / 7900;
}

const china = percentageOfWorld1(1441);
const tunisia = percentageOfWorld1(12);
const usa = percentageOfWorld1(360);

console.log(china);
console.log(tunisia);
console.log(usa);

const percentageOfWorld2 = function(population)
{
    return 100 * population / 7900;
}

console.log(percentageOfWorld2(1442));
console.log(percentageOfWorld2(360));
console.log(percentageOfWorld2(12));

// Arrow functions lecture assignment

const percentageWorld3 = population => 100 * population / 7900;

console.log(percentageWorld3(1442));
console.log(percentageWorld3(360));
console.log(percentageWorld3(12));
*/