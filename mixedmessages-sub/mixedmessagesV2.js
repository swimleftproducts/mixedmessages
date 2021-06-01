// We will create a program that takes in 3 guesse [name] [weapon] [location] from user 
// And then check if user guess matches computer generated strings

//Create a function that sets user choice to a user input array userinput = [name, weapon, location]

/*
function setname(name){
   userinput[0]=name;
}
*/
// to start game
// call takeuserInput(userInput)
//takeUserInput("adam","claws","car")
function takeUserInput() {
    //build array from user input
    //const userString = buildUserString(name, weapon, location);
    const userString = userInput;
    //console.log(userString)
    //build random computer array from function
    const compString = generateRandomString();
    //const compString = ['adam', 'claws', 'restaurant'];
    //use .join to create single word from each array built above for easy comparison
    let userForTest = makeArrayOneWord(userString)
    let compForTest = makeArrayOneWord(compString)
        // check if user and computer strings  matches
    console.log(userForTest)
    console.log(compForTest)

    let outcome = checkUserInput(userForTest, compForTest);
    // output result 
    finalToDo(outcome);

};

// This function is a randomizer for choosing the computer generated string [name] [weapon], [location]
function generateRandomString() {
    const names = ['adam', 'barb', 'biff', 'hazel', 'ray'];
    const weapons = ['gauntlet', 'claws', 'lightSaber', 'fork', 'pistol'];
    const locations = ['restaurant', 'beachside', 'apartment101', 'queenJet', 'car'];
    compString = [];
    compString.push(names[Math.floor(Math.random() * names.length)]);
    compString.push(weapons[Math.floor(Math.random() * weapons.length)]);
    compString.push(locations[Math.floor(Math.random() * locations.length)]);
    return compString
}

// user (June 1st, 2021 not necessary)
function buildUserString(name1, weapon2, location3) {
    let array = [];
    array[0] = name1;
    array[1] = weapon2;
    array[2] = location3;
    return array
}

// this makes compStrin Array and buildUserString Array to a single string for easy comparison
// I think arr.join('') oksy
// we will need to fix the logic up top

function makeArrayOneWord(array) {
    return array.join('');
};

// this compares the user generated string and computer generated string if it matches
//

function checkUserInput(userString, compString) {
    if (userString === compString) {
        return true
    } else {
        return false;
    }
}

// if user and computer matches, user wins and prints ("congratulations you win the game",  etc) + the computer generated string
// else user lose and prints ("too bad killer got away", etc.) + computer generated strings.

function finalToDo(outcome) {
    //if true, user win
    if (outcome) {
        document.getElementById('computer-input').innerHTML = compString[0] + " " + compString[1] + " " + compString[2];
        document.getElementById('end-result').innerHTML = 'Congratulations, the Star Killer has been caught! Thank you for cooperating.'
    } else {
        document.getElementById('computer-input').innerHTML = compString[0] + " " + compString[1] + " " + compString[2];
        document.getElementById('end-result').innerHTML = 'Too bad, the Star Killer got away...'
    }
}
