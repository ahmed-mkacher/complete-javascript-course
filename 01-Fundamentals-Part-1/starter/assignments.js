/*
// Values and Variables lecture assignment

const country = "Tunisia";
const continent = "Africa";
let population = 12;

console.log(country);
console.log(continent);
console.log(population);

// Data Types lecture assignment

const isIsland = false;
const language = "Arabic";

console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof country);
console.log(typeof population);

// Basic operators lecture assignment

const half = population / 2;
console.log(population + 1);
const more = population > 6;
const avg = population < 33;
let description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(description);

// Strings and template literals lecture assignment

description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

// If statements lecture assignment

if (population > 33)
{
    console.log(`${country}'s population is above average`);
}
else
{
    const belowAverage = 33 - population;
    console.log(`${country}'s population is ${belowAverage} million average`);
}

// Type conversion and coercion lecture assignment

console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

// Equality operators lecture assignment

let numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if (numNeighbours === 1)
{
    console.log("Only 1 border!");
}
else if (numNeighbours > 1)
{
    console.log("More than 1 border")
}
else
{
    console.log("No borders");
}

// Logical operators lecture assignment

if (language === "English" && population < 50 && isIsland === false)
{
    console.log(`You should live in ${country} :)`);
}
else
{
    console.log(`${country} does not meet your criteria :(`);
}

// Switch statement lecture assignment

switch (language)
{
    case "Chinese":
        console.log("MOST number of native speakers");
        break;
    case "Spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "English":
        console.log("3rd place");
        break;
    case "Hindi":
        console.log("Number 4");
        break;
    case "Arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D");
        break;
}

// Conditional operation lecture assignment

console.log(`${country}'s population is ${population > 33 ? "above" : "below"} average`);
*/