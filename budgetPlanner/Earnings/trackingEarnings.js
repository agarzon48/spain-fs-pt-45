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

function saveUserChanges() {
    fs.writeFileSync('/workspaces/spain-fs-pt-45-Raul-Gimenez/budgetPlanner/Earnings/userProfile.json', JSON.stringify(usersData));
}

function saveNewUserProfile(userProfile) {
    usersData.push(userProfile);
    saveUserChanges();
}

function calculateTotalMoney({ actualMoney, monthlyEarning, casualEarning }) {
    return actualMoney + monthlyEarning + casualEarning;
}

function conversCurrency(newCurrency, actualCurrency, index) {

    const EuroToDollarRatio = 6 / 5;
    const DollarToEuroRatio = 5 / 6;

    if (newCurrency == "$" && actualCurrency == "€") {
        usersData[index].actualEarning *= EuroToDollarRatio;
        usersData[index].monthlyEarning *= EuroToDollarRatio;
    }
    if (newCurrency == "€" && actualCurrency == "$") {
        usersData[index].actualEarning *= DollarToEuroRatio;
        usersData[index].monthlyEarning *= DollarToEuroRatio;
    }

}
/*
function getUsernameIndex(username){
    for (let index in usersData){
  
        let name = usersData[index].username;
    
        if(name == username){
          return index
        }
      }
}
*/
// He añadido el primer return.
function getUsernameIndex(username) {
    return usersData.findIndex((userElement) => {
        return (userElement.username == username)
    });
}

/*
function getLastId() {
    let lastId;
    if (!usersData[0]){
        lastId = 1;
    }
    if (usersData[0]){
        let lastUser = usersData.length-1
        lastId = usersData[lastUser].id;
        lastId++
    }
    return lastId
}
*/


function getLastId() {
    let lastId = 1;
    usersData.forEach(({id}) => {
        if (id >= lastId) {
            lastId = id + 1;
        }
        return lastId
    })
    return lastId;
}

function getUsersNames() {
    const usersNamesArray = []

    for (let i = 0; i < usersData.length; i++) {
        usersNamesArray.push(usersData[i].username);
    }
    return usersNamesArray;
}


//main functions

function startProgram() {

    const username = prompt('What is your username? ');


    //Crear usuario
    const usersNamesArray = getUsersNames();
    if (!usersNamesArray.includes(username)) {
        console.log(`Hi ${username}, please enter your data:`)
        const id = getLastId();
        const currency = prompt('What type of currency will you use (€, $)? ');
        const actualEarning = Number(prompt('How much money do you have? '));
        const monthlyEarning = Number(prompt('How much money do you earn monthly? '));
        let user = {
            id,
            username,
            currency,
            actualEarning,
            monthlyEarning,
        }
        saveNewUserProfile(user);
    }

    //Modificar usuario
    if (usersNamesArray.includes(username)) {
        const userIndex = getUsernameIndex(username);
        console.log(`Hi ${username}, this is your data:
        Money: ${usersData[userIndex].actualEarning}
        Monthly earning: ${usersData[userIndex].monthlyEarning}
    `);
        // What do you want
        let whatDoYouWant = Number(prompt(`What do you want to do? 
        1.Modyfy monthly earnings 2.Add casual earning 3.Modyfy actual money 4.Modyfy username 5.Change currency 6.Exit

        `));
        while (whatDoYouWant > 6 && whatDoYouWant < 0) {
            whatDoYouWant = Number(prompt(`Wrong answer, please check the options.
            What do you want to do? 
            1.Modyfy monthly earnings 2.Add casual earning 3.Modyfy actual money 4.Modyfy username 5.Change currency 6.Exit

            `));
        }
        switch (whatDoYouWant) {
            case (1):
                const monthlyEarning = Number(prompt('How much money do you earn monthly now? '));
                usersData[userIndex].monthlyEarning = monthlyEarning;
                saveUserChanges();
                console.log(`Monthly earning updated!
                Monthly earning now: ${usersData[userIndex].monthlyEarning}`)
                break;

            case (2):
                casualEarning = Number(prompt('How much extra money do you earn? '));
                usersData[userIndex].actualEarning += casualEarning;
                saveUserChanges();
                console.log(`Casual earning added!`)
                break;

            case (3):
                const actualEarning = Number(prompt('How much money do you have now? '));
                usersData[userIndex].actualEarning = actualEarning;
                saveUserChanges();
                console.log(`Actual money updated!`)
                break;

            case (4):
                const username = prompt('What new username do you want? ');
                if (usersNamesArray.includes(username)) {
                    console.log(`This username already exist. Try again.`)
                } else {
                    usersData[userIndex].username = username;
                    saveUserChanges();
                    console.log(`Username updated!`)
                }
                break;
            case (5):
                const newCurrency = prompt('What type of currency will you use now(€, $)? ');
                conversCurrency(newCurrency, usersData[userIndex].currency, userIndex);
                usersData[userIndex].currency = newCurrency;

                saveUserChanges();
                console.log(`Currency updated!`)
                break;

            case (6):
                console.log(`Ok, goodbye!`);

        }
    }
}


console.log(getUsersNames());
startProgram();
