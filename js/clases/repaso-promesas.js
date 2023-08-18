const myPromise = (msg) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (typeof msg === 'number') {
            reject('Necesito una string');
        }
        resolve(msg);
    }, 1000);
  });
};

// myPromise(5)
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

myPromise(5).then(res => console.log(res)).catch(err => console.log(err));

// ASYNC AWAIT
async function asyncFunction() {
    try {
        const result = await myPromise(5);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

asyncFunction();

const asyncArrowFunction = async () => {
    try {
      const result = await myPromise(5);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
}

const example = 'asdf';

const result = example
    .toLowerCase()
    .toUpperCase()
    .split('')
    .forEach((char) => console.log(char));

console.log(result)