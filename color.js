const brain = require('brain.js');

const network = new brain.NeuralNetwork();

//dataset for classifiying if a color is light or dar
network.train([
    { input: { r: 0.62, g: 0.72, b: 0.88 }, output: { light: 1 } },
   
  ]);

const result = network.run({ r: 0, g: 1, b: 0.65 });
console.group('Probabilities');
console.log(result);
console.groupEnd();