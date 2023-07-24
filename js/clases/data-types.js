// PRIMITIVES

// STRING
// Texto - finalidad de representación de datos
const myFirstString = "Hello";
const mySecondString = 'World';

const myTitle = 'Hello, world!';

const templateLiteral = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./app.js" defer></script>
</head>
<body>
    <h1>${myTitle}</h1>
</body>
</html>
`;

console.log(templateLiteral);

templateLiteral.toUpperCase();

console.log(myFirstString + ' ' + mySecondString)
console.log(`${myFirstString} ${mySecondString}`)

// NUMBER
// Operaciones matemáticas
console.log(typeof 1);
console.log(typeof 1.1);

let counter = 0;

console.log(counter);

counter = counter + 1;
console.log(counter);

counter += 1;
console.log(counter);

counter++ // counter = counter + 1;
console.log(counter);

const randomNumber = Math.random() * 10 + 1;

console.log(Math.floor(randomNumber));

// Cast
console.log(Number('1') + 1);

String(1)

// BOOLEAN
const trueValue = true;
const falseValue = false;

// && - true solo cuando ambos lados son true
// || - false solo cuando ambos lados son false

const userHasFreeDiscount = false;
const userHasEnoughMoney = false;

const canSellTicket = userHasFreeDiscount || userHasEnoughMoney;

console.log(canSellTicket);

// >=
// >
// <=
// <
// ==
// !=
// ===
// !==

console.log(Boolean(0) == false);

// truthy - falsy
console.log(Boolean({}))

// NULL
const nullData = null;

// UNDEFINED
const undefinedData = undefined;

// SYMBOL - APARCADO DE MOMENTO

// ARRAY
const myArray = [1, 'a', nullData];

const arrayLength = myArray.length;

const firstElement = myArray[0];
const lastElement = myArray[myArray.length - 1];

const randomIndex = Math.floor(Math.random() * myArray.length);
const randomElement = myArray[randomIndex];

console.log(randomElement)

myArray[0] = 'New Value!';

// TRANSFORMACIONES O BÚSQUEDAS:
// .filter
// .map
// .find
// .forEach

// COMPARACIONES:
// .some
// .includes
// .every

// .shift
// .unshift
// .pop
// .push

// OBJECT - FUNCTION - "TODO ES UN OBJETO"
const myCat = {
    name: 'Raspas',
    age: 6,
    meow: () => console.log('meeeeeeow')
}

// Si conocemos la propiedad
const catData = myCat.name;

// Variables
const importantKey = 'name'
const catName = myCat[importantKey];

myCat.newProperty = 'Hello!';

delete myCat.age;

console.log(myCat)

myCat.meow();
