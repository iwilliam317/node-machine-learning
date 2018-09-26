const brain = require('brain.js');

const network = new brain.NeuralNetwork();

network.train([{input: { age: 22 }, output: { adult: 1 }},
           {input: { age: 5 }, output: { kid: 1 }},
           {input: { age: 16 }, output: { teenage: 1 }}]);

const result = network.run({ age: 22}); 

console.log(result);