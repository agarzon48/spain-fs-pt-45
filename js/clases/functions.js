// Sintaxis tradicional

// Primero la defino...
function myFirstFuncion () {}
// ...y luego la ejecuto
myFirstFuncion();

let n1 = 10000000;
let n2 = 200000000;


// SCOPE - CONTEXTO
function addTwoNumbers (n1, n2) { // Shadowing
    const result = n1 + n2;
    return result;
}


// console.log(addTwoNumbers(1, 2));
// console.log(addTwoNumbers(n1, n2));

// Sintaxis arrow
const myArrowFunction = () => { }

// Solo un argumento
const printArgument = argument => {
    console.log(argument);
}

// Más de un argumento
const addTwoNumbersAgain = (a, b) => {
    return a + b;
}

// Return implícito
const subtractTwoNumbers = (a, b) => a - b;

// Con objetos
const withObjects = ({ id }) => ({ something: id });


console.log(subtractTwoNumbers(8, 4));