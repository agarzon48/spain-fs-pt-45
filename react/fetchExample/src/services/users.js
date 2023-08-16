const URL = "https://pruebas.reqres.in/api/users";

export const getUsers = () => {
    return fetch(`${URL}?page=2`)
      .then((res) => {
        if (!res.ok) {
          throw Error();
        }
        return res.json();
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
}

export const deleteUsers = (id) => {
  return fetch(`${URL}/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) {
        throw Error();
      }
      return res.json();
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
