const loadUserProfileFile = require('/workspaces/spain-fs-pt-45-miguel/budgetPlanner/Earnings/trackingEarnings.json');

const usersData = loadUserProfileFile();

const listOfExpenses = [];

function regularExpenses({
  category = 'Uncategorized',
  description,
  amount,
  date,
  isVisible = true
}) {
  if (!description) {
    throw Error('Tienes que proporcionar una descripción');
  }
  const newExpense = {
    category,
    description,
    amount,
    date,
    isVisible
  };
  listOfExpenses.push(newExpense);
}

function calculateTotalAmount() {
  // let total = 0;
  // for (let i = 0; i < listOfExpenses.length; i++) {
  //   total += listOfExpenses[i].amount;
  // }
  // return total;
  // .forEach / for (const expense of listOfExpenses)

  const total = listOfExpenses.reduce((acc, item) => acc + item.amount, 0);
  return total;
}

// Example expenses

const foodExpense = {
  category: 'Food',
  description: 'Groceries',
  amount: 50,
  date: '2023-07-13'
}

regularExpenses(foodExpense);
regularExpenses({
  description: 'Gasoline',
  amount: 30,
  date: '2023-07-14',
});
regularExpenses({
  category: 'Utilities',
  description: 'Electricity bill',
  amount: 80,
  date: '2023-07-15'
});
regularExpenses({
  description: 'Seguro del coche',
  amount: 30,
})

// regularExpenses( null, 'Seguro del coche',  30, new Date(), true )



const totalAmount = calculateTotalAmount();


// ingresos + gastos


const totalBalance = usersData[index].actualEarning - totalAmount;


console.log(balanceRaul)
console.log('Total amount of expenses:', totalAmount);
console.log(listOfExpenses)
console.log('This is your total balance:',totalBalance);