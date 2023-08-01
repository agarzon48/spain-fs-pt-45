export const listOfCategoriesDetails = (arrayObjects) => {
    const listOfCategoriesDetails = document.createElement('div');
    listOfCategoriesDetails.className = 'divDetails';

    arrayObjects.forEach(element => {   
        const item = document.createElement('li');
        item.className = `list-group-item`;
        item.textContent = element.category + ' ' + element.description + ' ' + element.amount + '€';
        listOfCategoriesDetails.append(item);
    });

    return listOfCategoriesDetails;
}