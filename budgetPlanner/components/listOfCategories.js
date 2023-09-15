export const listOfCategoriesComponent = (arrayCategories) => {
    const listOfCategoriesComponent = document.createElement('div');
    listOfCategoriesComponent.className = 'divCategories';

    arrayCategories.forEach(element => {   
        const item = document.createElement('button');
        item.className = element.class;
        item.id = element.id;
        item.textContent = element.category + ' ' + element.totalAmount + '€';
        const icon = document.createElement('i');
        icon.className = element.icon;
        item.prepend(icon);
        listOfCategoriesComponent.append(item);   
    });
    return listOfCategoriesComponent;
}