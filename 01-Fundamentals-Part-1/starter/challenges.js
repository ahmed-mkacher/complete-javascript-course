/*
// Coding challenge 1

// let massMark = 78;
// let massJohn = 92;
// const heightMark = 1.69;
// const heightJohn = 1.95;

let massMark = 95;
let massJohn = 85;
const heightMark = 1.88;
const heightJohn = 1.76;

const marksBMI = massMark/ heightMark ** 2;
const johnsBMI = massJohn/ heightJohn ** 2;

const markHigherBMI = johnsBMI < marksBMI;

console.log(marksBMI, johnsBMI, markHigherBMI);

// Coding challenge 2

if (markHigherBMI)
{
    console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})!`);
}
else
{
    console.log(`John's BMI (${johnsBMI}) is higher than Marks's (${marksBMI})!`);
}

// Coding challenge 3

const dolphinScore = (96 + 108 + 89) / 3;
const koalaScore = (88 + 91 + 110) / 3;

if (dolphinScore < koalaScore && 99 < koalaScore)
{
    console.log("Koala wins!");
}
else if (koalaScore < dolphinScore && 99 < dolphinScore)
{
    console.log("Dolphin wins!");
}
else if (99 < koalaScore && 99 < dolphinScore && koalaScore === dolphinScore)
{
    console.log("Draw");
}
else
{
    console.log("No one wins");
}

// Coding challenge 4

let tip;
const bill = 275;
// const bill = 40;
// const bill = 430;
bill <= 300 && bill >= 50 ? tip = 0.15 * bill : tip = 0.2 * bill;
*/

