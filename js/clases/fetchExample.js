fetch("https://reqres.in/gfdsgsdfg", {
  method: "POST",
  body: JSON.stringify({
    name: "morpheus",
    job: "leader",
  }),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => {
      if (!res.ok) {
          console.log(res.ok);
          console.log(res.status);
      throw Error();
      }
      if ((res.status = 404)) {
        throw new Error("El recurso no se ha encontrado");
      }
      if ((res.status = 500)) {
        throw new Error("Ha habido un error en el servidor");
      }
    return res.json();
  })
  .then((res) => {
    console.log(res);
  })
    .catch((err) => {

        showAlert('Ha habido un error')
      console.log(err);
  });
