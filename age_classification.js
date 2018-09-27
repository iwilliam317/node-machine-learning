const brain = require('brain.js');

const network = new brain.NeuralNetwork();

network.train([
  { input: { age: 22 }, output: { adult: 1 } },
  { input: { age: 18 }, output: { adult: 1 } },
  { input: { age: 20 }, output: { adult: 1 } },
  { input: { age: 27 }, output: { adult: 1 } },
  { input: { age: 21 }, output: { adult: 1 } },
  { input: { age: 5 }, output: { kid: 1 } },
  { input: { age: 7 }, output: { kid: 1 } },
  { input: { age: 16 }, output: { teenage: 1 } },
  { input: { age: 15 }, output: { teenage: 1 } },
  { input: { age: 13 }, output: { teenage: 1 } },
  ]);

const result = network.run({ age: 22}); 

console.log(result);