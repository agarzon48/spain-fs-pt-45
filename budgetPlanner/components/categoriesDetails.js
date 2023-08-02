export const listOfCategoriesDetails = (arrayObjects) => {
    const listOfCategoriesDetails = document.createElement('div');
    listOfCategoriesDetails.className = 'divDetails';
    listOfCategoriesDetails.id = `divDetails-${arrayObjects[0].category}`;

    const title = document.createElement('h4');
    title.className = "h4 text-secondary text-center d-grid col-3 mx-auto";
    title.textContent = arrayObjects[0].category;
    listOfCategoriesDetails.prepend(title);
    arrayObjects.forEach(element => {   
        const item = document.createElement('li');
        item.className = `list-group d-grid col-3 m-4 mx-auto`;
        item.textContent = element.description + ' ' + element.date + ' ' + element.amount + '€';
        listOfCategoriesDetails.append(item);
    });
    return listOfCategoriesDetails;
}