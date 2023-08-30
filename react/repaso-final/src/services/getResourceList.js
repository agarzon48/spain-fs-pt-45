export const getResourceList = (resource) => {
    return fetch(`https://www.swapi.tech/api/${resource}`)
        .then(res => {
            if (!res.ok) {
                throw Error('Ha habido un error con la petición');
            }
            return res.json();
        })
        .then(res => res.results)
        .catch(err => console.log(err));
};