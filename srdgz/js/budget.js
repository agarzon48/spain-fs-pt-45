let categories = ['food', 'services', 'housing', 'education'];
let categoriesData = [[], [], [], []];
let textCategories = '';

// Print list of categories
function printCategories(){
    textCategories = 'Enter the category: '
    for (let i = 0; i < categories.length; i++){
        textCategories += (i + 1) + '-' + categories[i] + ' ';
    }
    return textCategories;
}

// Add expense to a category
function addExpenses (array, amount) {
    array.push(-Math.abs(amount));
    return array;
}

// Delete expense from a category
function deleteExpenses (array, amount) {
    array.splice(array.indexOf(-Math.abs(amount)), 1);
    return array;
}

const prompt = require('prompt-sync')({ sigint: true });
let retry = 1;
while (retry == 1) {        
    let option = prompt('What do you want to do?: 1-Add, 2-Delete: ');
    let category = prompt(printCategories());
    category = category - 1;
    let amount = prompt('Enter the amount: ');
    if (option == 1) {
        console.log(categories[category] + ': ' + addExpenses(categoriesData[category], amount));
    } else {
        console.log(categories[category] + ': ' + deleteExpenses(categoriesData[category], amount));
    }
    retry = prompt('Do you want to perform another operation?: 1-Yes, 2-No ');
}