//import needed modules
import { assignEvents } from './assignEvents.js';
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
    // This compares if the selected story and selection matches userSelection
    let comp = [obj.name, obj.weapon, obj.location].join(', ');
    let user = obj.userSelection.join(', ');
    let result = '';
    if (comp === user) {
        result = `You win! your guess "${user}" was exactly the same with killer's alibi "${comp}"`;
    } else if (comp !== user && user === "") {
        result = `You lose! the killer's alibi was "${comp}" and you didn't have any leads`;
    } else {
        result = `You lose! the killer's alibi was "${comp}" your leads were "${user}"`;
    }

    const container = document.createElement('div');
    container.className = "container";
    container.innerHTML = "<h1> THE RESULTS ARE IN</h1>"

    // this loop will add necessary container divs for each computer generated choices and user generated choices
    for (let i = 0; i < 3; i++) {
        const element = document.createElement('div');
        if (i === 0) {
            element.className = "results";
            element.innerHTML = `<img src="${obj.nameImage}"/><img src="${obj.weaponImage}"/><img src="${obj.locationImage}"/>`
        } else if (i === 1) {
            element.className = "results";
            element.innerHTML = `${obj.userSelection}`
        } else {
            element.className = "resultContainer"
            element.innerHTML = `${result}`;
        }
        container.appendChild(element)
    }

    root.appendChild(container);




}