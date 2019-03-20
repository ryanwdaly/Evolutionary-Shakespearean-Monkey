
Population = require("./Population");

const target = "This is an example of a genetic algorithm.";
const popMax = 400;
const mutationRate = 0.001;

// var bestPhrase;
// var allPhrases;
// var stats;
var population;

population = new Population(target, mutationRate, popMax)

while(!population.isTargetMatch()) {
    population.calcFitness();
    population.naturalSelection();
    population.generate();
}

console.log("target matched!");
console.log("Total Generations:", population.totalGenerations)






