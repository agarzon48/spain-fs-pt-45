let categories = [];

function addCategory() {
  const newCategory = prompt("Ingrese el nombre de la nueva categoría:");
  if (newCategory) {
    categories.push(newCategory);
    console.log("Nueva categoría agregada exitosamente.");
  } else {
    console.log("No se ingresó un nombre válido para la categoría.");
  }

//ejemplo: addCategory(); console.log(categories);
}


//para eliminar categorias

function removeCategory(category) {
  const index = categories.indexOf(category);
  if (index !== -1) {
    categories.splice(index, 1);

    
    //ejemplo removeCategory('Transporte'); console.log(categories);
  }
}

//para editar

function editCategory(oldCategory, newCategory) {
  const index = categories.indexOf(oldCategory);
  if (index !== -1) {
    categories[index] = newCategory;

  //ejemplo editCategory('Comida', 'Alimentos'); console.log(categories); 
  }
}