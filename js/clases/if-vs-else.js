const sellTicket = (showRequiresLegalAge, userAge, showPrice, userMoney) => {
    const legalAge = 18;

  const hasEnoughMoney = userMoney >= showPrice;
    const hasLegalAge = userAge >= legalAge;

    const errors = [];
    
    if (!hasEnoughMoney) {
        errors.push({
            msg: "No tienes suficiente cash! Rellena tu monedero!",
            code: 100
        });
    }

    if (showRequiresLegalAge && !hasLegalAge) {
      errors.push("No tienes edad suficiente para este evento!");
    }
    
    if (errors.length) {
        return errors;
    }
    sendToAnalytics(`${SERVER_URL}/analytics/sales`);

    return 'Aquí tienes tu entrada!';
};

const response = sellTicket(true, 17, 20.99, 23.46);

console.log(response);




// FizzBuzz
function numberIsDivisible(num) {
    if (num <= 0) return "Number is not positive";

    if (num % 2 === 0 && num % 3 === 0) return "Divisible by 2 and 3";
    
    if (num % 2 === 0) return "Divisible by 2";
    
    if (num % 3 === 0) return 'Divisible by 3';
    
    return "Not divisible by 2 or 3";
}