// LLAMADAS HTTP
// 1. URL
// 2. Método
// (3. datos -> GET = URL // POST, PATCH, PUT = BODY)
// (cabeceras)

// GET
fetch("https://www.swapi.tech/api/people")
    .then(res => {
        if (!res.ok) {
            throw new Error();
        }
        return response.json();
    })
    .then(res => {
        // Puedo utilizar mi código. Ejemplo:
        // setUsers(res.results);
        console.log(res);
    })
    .catch(err => console.log(err));

// POST / PUT / PATCH
const exampleList = [];

fetch("https://www.swapi.tech/api/people/5", {
    method: "PUT",
    body: JSON.stringify(exampleList),
    headers: {
        'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + token
    }
})
  .then((res) => {
    if (!res.ok) {
      throw new Error();
    }
    return response.json();
  })
  .then((res) => {
    // Puedo utilizar mi código. Ejemplo:
    // setUsers(res.results);
    console.log(res);
  })
  .catch((err) => console.log(err));

// DELETE
fetch("https://www.swapi.tech/api/people/1", {
    method: 'DELETE'
})
  .then((res) => {
    if (!res.ok) {
      throw new Error();
    }
    return response.json();
  })
  .then((res) => {
    // Puedo utilizar mi código. Ejemplo:
    // setUsers(res.results);
    console.log(res);
  })
  .catch((err) => console.log(err));