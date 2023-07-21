const prompt = require('prompt-sync')({ sigint: true });
const fs = require('fs');

//Second Functions

function loadUserProfileFile() {
  try {
    const data = fs.readFileSync('/workspaces/spain-fs-pt-45-Raul-Gimenez/budgetPlanner/Earnings/userProfile.json');
    return JSON.parse(data);
  } catch (error) {
    return {};
  }
}
const usersData = loadUserProfileFile();

function conversCurrency(newCurrency, actualCurrency, index){

  const euroToDollarRatio = 6/5;
  const dollarToEuroRatio = 5/6;

  if (newCurrency == "$" && actualCurrency == "€"){
      usersData[index].actualEarning *= euroToDollarRatio;
      usersData[index].monthlyEarning *= euroToDollarRatio;
  }
  if (newCurrency == "€" && actualCurrency == "$"){
      usersData[index].actualEarning *= dollarToEuroRatio;
      usersData[index].monthlyEarning *= dollarToEuroRatio;
  }
  
}

function changeCurrency() {
  console.log(usersData[1])
  const newCurrency = prompt('What type of currency will you use now(€, $)? ');
  conversCurrency(newCurrency, usersData[1].currency, 1);
  usersData[1].currency = newCurrency;

  console.log(usersData[1]);
  

}


changeCurrency();