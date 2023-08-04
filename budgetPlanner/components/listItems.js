export const listItemsComponent = (arrayObjects) => {
    const listItemsComponent = document.createElement('div');
    listItemsComponent.style.display = 'flex';
    listItemsComponent.style.flexDirection = 'column';
    listItemsComponent.style.gap = '10px'

    arrayObjects.forEach(element => {
        console.log(element.name);
        const item = document.createElement('button');
        listItemsComponent.appendChild(item);
        item.textContent = element.name;
        item.style.backgroundColor = element.backgroundColor;
        item.classList = element.class;
        
    });

    return listItemsComponent;

}