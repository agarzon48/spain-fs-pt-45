// Common JS - CJS

const prompt = require('prompt-sync')({ sigint: true });

const name = prompt('¿Cómo te llamas?'); // STOP!
console.log(`Hola, ${name}`)

module.exports = {
  name,
};