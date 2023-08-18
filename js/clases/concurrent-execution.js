const myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(Date.now());
    }, 1000);
  });
};

const sequentialArray = Array.from({length: 100}, () => myPromise);

// console.log(sequentialArray);

const sequentialExecution = async () => {
    const resultsArray = [];
    for await (func of sequentialArray) {
        const newResult = await func();
        resultsArray.push(newResult);
    }
    console.log(resultsArray)
}

// sequentialExecution();

const concurrentExecution = async () => {
    const result = await Promise.all(sequentialArray.map(fun => fun()));
    console.log(result);
}

// concurrentExecution();

Promise.all(sequentialArray.map((fun) => fun()))
    .then(res => console.log(res));