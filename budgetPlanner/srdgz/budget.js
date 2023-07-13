function movement (date, concept, amount) {
    this.date = date;
    this.concept = concept;
    this.amount = amount;
}

function addExpenses (array, date, concept, amount) {
    let move = new movement(date, concept, amount);
    movement.amount = -Math.abs(movement.amount);
    array.push(movement);
    return array;
}

function addIncome (array, date, concept, amount) {
    let move = new movement(date, concept, amount);
    movement.amount = Math.abs(movement.amount);
    array.push(movement);
    return array;
}


let ocio = [];
console.log(addIncome(ocio, "12/07/2023", "restaurante", 35));

/*
function addExpenses (array, amount) {
    array.push(-Math.abs(amount));
    return array;
}
*/