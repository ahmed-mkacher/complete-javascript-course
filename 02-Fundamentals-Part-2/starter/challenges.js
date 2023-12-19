/*
"use strict";

const dS1 = 85;
const dS2 = 54;
const dS3 = 41;

const kS1 = 23;
const kS2 = 34;
const kS3 = 27;

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins = calcAverage(dS1, dS2, dS3);
const avgKoalas = calcAverage(kS1, kS2, kS3);

function checkWinner(avgDolphins, avgKoalas)
{
    if (avgDolphins >= 2 * avgKoalas)
    {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if (avgKoalas >= 2 * avgDolphins)
    {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
    else
    {
        console.log("No team wins");
    }
}

checkWinner(avgDolphins, avgKoalas);
 */