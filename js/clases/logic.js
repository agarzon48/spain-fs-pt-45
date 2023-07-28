// shortcircuits

// false || false = false. Cualquier otra es true (si hay un true, || da true)
// true && true = true. Cualquier otra es false (si hay un false, && da false)

const condition = false;

const ternary = condition ? 'Hola' : 'Adiós';

const variables = {};

const renderWithTernary = `<p>${variables.name ? variables.name : ""}</p>`;
const renderWithShortCircuit = `<p>${variables.name || ''}</p>`;


// console.log(ternary);

// const result = false && ¿¿??; // Como tenemos false, no nos hace falta
                                 // evaluar la segunda parte
// const result = true && ¿¿??;  // Como tenemos true, DEBEMOS resolver la
                                 // segunda parte
                                 
// condition && console.log('Hola!');


// condition || console.log('Hola!');


// Set default arguments:

const isLoggedIn = false;
const isLegalAge = false;
const hasEnoughMoney = false;

const meetsAnyRequisite = isLoggedIn || isLegalAge || hasEnoughMoney;
const meetsAllRequisites = isLoggedIn && isLegalAge && hasEnoughMoney;

// console.log(meetsAnyRequisite);

const userName = undefined;

const helloMessage = `Hello, ${userName || firstName + lastName || 'usuario'}`;

console.log(helloMessage)
