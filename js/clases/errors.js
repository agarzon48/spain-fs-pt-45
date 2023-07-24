const throwError = (msg) => {
    throw new Error(msg);
}

// throwError("This is a custom error!");

const mockHttpRequest = () => {
    try {
        // code...
        console.log('Trying to fetch data...');

        throw new Error('404');

        console.log('This is your data!');
    } catch (err) {
        console.log(err);
    }
}

mockHttpRequest();

console.log('done');