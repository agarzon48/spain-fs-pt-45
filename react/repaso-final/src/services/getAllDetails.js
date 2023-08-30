import { getResourceList } from "./getResourceList"
import { getResourceDetails } from "./getResorceDetails"

export const getAllDetails = (resource) => {
    return getResourceList(resource)
      .then((resourceList) => {
        return Promise.all(
          resourceList.map((resource) => {
            return getResourceDetails(resource.url);
          })
        );
      })
      .catch((err) => console.log(err));
}


// QUIERO: detalles de personajes, vehículos, etc.
// NECESITO: llamar a su url única

// QUIERO: la url única de cada recurso
// NECESITO: llamar a la url general

// QUIERO: la url general de CADA recurso
// NECESITO: hacer dinámica la parte final

//////

// 1. construir a la url general con la parte final dinámica
// RESUELTO: tengo la url general de CADA recurso

// 2. llamo a la url general con la parte final dinámica
// RESUELTO: tengo la url única de cada recurso -> getResourceList()

// 3. llamar a su url única
// RESUELTO: tengo detalles de personajes, vehículos, etc. -> getResourceDetails()