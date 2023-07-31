const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// For each -> ejecuta {} por cada item
// const anotherArray = [];

exampleArray.forEach(item => {
    console.log(item);
    // anotherArray.push(item);
});

const anotherArray = [...exampleArray];

// map -> transforma el array
const doubledNumbers = exampleArray.map(item => {
    return item * 2
});

console.log(doubledNumbers);

// filter -> devuelve los elementos que cumplen la condición
const oddNumbers = exampleArray.filter(item => item % 2 !== 0);

console.log(oddNumbers)