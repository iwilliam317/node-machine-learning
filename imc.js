const brain = require('brain.js');

const network = new brain.NeuralNetwork();

// weight in kg
// height in cm

network.train([
  { input: { height: 175, weight: 110 }, output: { obese: 1 } },
  { input: { height: 175, weight: 82 }, output: { normal: 1 } },
  { input: { height: 175, weight: 78 }, output: { normal: 1 } },
  { input: { height: 175, weight: 60 }, output: { under: 1 } }
]);

const normalProbability = network.run({ height: 175, weight: 80 }); 

console.groupCollapsed('Probabilities');
console.log(normalProbability);
console.groupEnd();