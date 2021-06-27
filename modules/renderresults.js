//import needed modules
import { assignEvents } from './assignevents.js';
import { gameSetUp } from './storylines.js';

// this function takes in an object that represents the 
//storyline for this game. The function then renders
// the relevant intro page



export const renderResults = (obj) => {
    const root = document.getElementById("root");
    // remove all html 
    while (root.firstChild) {
        root.removeChild(root.lastChild);

    }

    let comp = [gameSetUp.stories[0].name, gameSetUp.stories[0].weapon, gameSetUp.stories[0].location].join(', ');
    //comp.join('')
    let user = gameSetUp.stories[0].userSelection.join(', ');
    let result = '';
    if (comp === user) {
        result = `You win! your guess "${user}" was exactly the same with killer's alibi "${comp}"`;
    } else {
        result = `You lose! the killer's alibi was "${comp}" your leads were "${user}"`;
    }

    console.log(`${comp}\n${user}`)

    const container = document.createElement('div');
    container.className = "container";
    container.innerHTML = "<h1> THE RESULTS ARE IN</h1>"
        //creating a div within the div for the User Selection and Computer generated selection
        // This is for Computer generated selection
    const computerContainer = document.createElement('div');
    computerContainer.className = "results";
    computerContainer.innerHTML = `<img src="${gameSetUp.stories[0].nameImage}"><img src="${gameSetUp.stories[0].weaponImage}"><img src="${gameSetUp.stories[0].locationImage}">`
        // This is for User Selected choices (It's hard coded at the moment for testing...)
    const userContainer = document.createElement('div');
    userContainer.className = "results";
    userContainer.innerHTML = `<img src="${gameSetUp.stories[0].nameImage}"><img src="${gameSetUp.stories[0].weaponImage}"><img src="${gameSetUp.stories[0].locationImage}">`
        //container.id = 
        //This is for Result Container that
    const resultContainer = document.createElement('div');
    resultContainer.className = "resultContainer";
    resultContainer.innerHTML = `<h4>${result}</h4>`; //JSON.stringify(obj);
    // insert containers in 'root' div
    container.appendChild(computerContainer);
    container.appendChild(userContainer);
    container.appendChild(resultContainer);
    root.appendChild(container);




}

// This function compares if the selected story and selection matches userSelection