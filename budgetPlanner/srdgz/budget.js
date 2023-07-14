const food = [];
const services = [];
const housing = [];
const education = [];

function addExpenses (array, amount) {
    array.push(-Math.abs(amount));
    return array;
}

function deleteExpenses (array, amount) {
    array.splice(array.indexOf(-Math.abs(amount)), 1);
    return array;
}

const prompt = require('prompt-sync')({ sigint: true });
let retry = 1;
while (retry == 1) {        
    let option = prompt('What do you want to do?: 1-Add, 2-Delete: ');
    let category = prompt('Enter the category: 1-Food, 2-Services, 3-Housing, 4-Education: ');
    let amount = prompt('Enter the amount: ');
    if (option == 1) {
        switch (category){
            case "1":
                console.log("Food: " + addExpenses(food,amount));
                break;
            case "2":
                console.log("Services: " + addExpenses(services,amount));
                break;
            case "3":
                console.log("Housing: " + addExpenses(housing,amount));
                break;
            case "4":
                console.log("Education: " + addExpenses(education,amount));
            default:
                console.log("Introduce a correct number: ")
        }
    } else {
        switch (category){
            case "1":
                console.log("Food: " + deleteExpenses(food,amount));
                break;
            case "2":
                console.log("Services: " + deleteExpenses(services,amount));
                break;
            case "3":
                console.log("Housing: " + deleteExpenses(housing,amount));
                break;
            case "4":
                console.log("Education: " + deleteExpenses(education,amount));
            default:
                console.log("Introduce a correct number: ")
        }
    }
    retry = prompt('Do you want to perform another operation?: 1-Yes, 2-No: ');
}