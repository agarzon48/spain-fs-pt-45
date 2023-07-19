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

function saveNewUserProfile(userProfile) {
    usersData.push(userProfile);
    fs.writeFileSync('/workspaces/spain-fs-pt-45-Raul-Gimenez/budgetPlanner/Earnings/userProfile.json', JSON.stringify(usersData));
}

function calculateTotalMoney(user) {
    const { actualMoney, monthlyEarning, casualEarning } = user;
    return actualMoney + monthlyEarning + casualEarning;
}

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

function getUserId(user) {
    let userId = 0;
    usersData.forEach(({}))


}
function getUsersNames(){
    const usersNamesArray = []

    for (let i = 0; i < usersData.length; i++){
        usersNamesArray.push(usersData[i].name);
    }
return usersNamesArray;
}

/*
function whatsYourName(){
    const username = prompt('What is your username? ');
    if (username = )

}
*/

//main functions

function startProgram () {
    
    const username = prompt('What is your username? ');
    //Crear usuario
    const usersNamesArray = getUsersNames();
    if (!usersNamesArray.includes(username)) {
        const id = getLastId();
        const currency = prompt('What type of currency will you use (€, $)? ');
        const actualEarning = Number(prompt('How much money do you have? '));
        const monthlyEarning = Number(prompt('How much money do you earn monthly? '));
        const haveCasualEarning = prompt('Do you have any extra earnings? ("Yes" or "No") ');
        let casualEarning = 0;
        if (haveCasualEarning === 'Yes') {
            casualEarning = Number(prompt('How much extra money do you earn? '));
        }  
        let user = {
            id,
            username,
            currency,
            actualEarning,
            monthlyEarning,
        } 
        saveNewUserProfile(user);
    }

    if (usersNamesArray.includes(username)){
        // What do you want
        let whatDoYouWant = Number(prompt(`What do you want to do? 
        1.Modyfy monthly earnings 2.Add casual earning 3.Modyfy actual money 4.Modyfy username 5.Exit
        `));    
        while (whatDoYouWant > 5 && whatDoYouWant < 0) {
            whatDoYouWant = Number(prompt(`Wrong answer, please check the options.
            What do you want to do? 
            1.Modyfy monthly earnings 2.Add casual earning 3.Modyfy actual money 4.Modyfy username 5.Exit
            `));    
        }
        switch (whatDoYouWant) {
            case (1): 
            const monthlyEarning = Number(prompt('How much money do you earn monthly? '));
            usersData

        }
    }
}

startProgram();


//pruebas

//const usersData = loadUserProfileFile();

/*
// Usuario Existente
if (username == usersData.forEach(name)) {
    // What do you want
    let whatDoYouWant = Number(prompt(`What do you want to do? 
    1.Modyfy monthly earnings 2.Add casual earning 3.Modyfy actual money 4.Modyfy username 5.Exit
    `));    
    while (whatDoYouWant > 5 || whatDoYouWant !== Number) {
        whatDoYouWant = Number(prompt(`Wrong answer, please check the options.
        What do you want to do? 
        1.Modyfy monthly earnings 2.Add casual earning 3.Modyfy actual money 4.Modyfy username 5.Exit
        `));    
        }
    if (whatDoYouWant === 1) {
        usersData
    } 
}

let userRaul = {
    "id": 1,
    "currency": "€",
    "actualEarning": 15000,
    "monthlyEarning": 6454,
    "forecastTime": 0,
    "casualEarning": 500
};

let userSaul = {
    "id":5,
    "currency": "€",
    "actualEarning": 15000,
    "monthlyEarning": 6454,
    "forecastTime": 0,
    "casualEarning": 500
};

usersData.push(userRaul);
usersData.push(userSaul);
saveUserProfile(usersData);
*/