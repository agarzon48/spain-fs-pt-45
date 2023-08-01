const myArray = ['a', 's', 'd', 'f'];
const myObject = {
    name: 'Raspas',
    age: 6,
    meow() {
        console.log('Meooow!')
    }
}

for (const item of myArray) { // arrays
    console.log(item);
}

console.log('----------');

for (const item in myObject) { // objects
    console.log(item);
}

console.log("----------");

// ITERATORS

myArray.forEach((item, index) => {
    console.log(`Item ${item} - index: ${index}`);
});

console.log("----------");

const values = Object.values(myObject);
const keys = Object.keys(myObject);
const keyValues = Object.entries(myObject);

for (const [key, value] of keyValues) {
  console.log(`${key} - ${value}`);
}