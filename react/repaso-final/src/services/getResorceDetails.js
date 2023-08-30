export const getResourceDetails = (url) => {
    return fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Ha habido un error con la petición");
        }
        return res.json();
      })
        .then((res) => {
          return {
            uid: res.result._id,
            ...res.result.properties
          };
        })
      .catch((err) => console.log(err));
}