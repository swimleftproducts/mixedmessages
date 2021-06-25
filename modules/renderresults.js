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

    let comp = [gameSetUp.stories[0].name, gameSetUp.stories[0].weapon, gameSetUp.stories[0].location].join(', ')
        //comp.join('')
    let user = gameSetUp.stories[0].userSelection.join(', ');
    let result = '';
    if (comp === user) {
        result = `You win! your guess \n[ ${user} ] was exactly the same with killer's allibi \n[ ${comp} ]`
    } else {
        result = `You lose! the killer's allibi was \n[ ${comp} ] your leads were \n[ ${user} ]`
    }

    /*let result123 = ""
    for (let i = 0; i < comp.length; i++) {
        for (let j = 0; j < user.length; j++) {
            if (i === j) {
                result123 = `You win! the killer's alibi was ${comp} your leads were ${user}`
            } else {
                result123 = `You lose! the killer's alibi was ${comp} your leads were ${user}`
            }
        }
    }*/
    console.log(`${comp}\n${user}`)

    const container = document.createElement('div');
    container.className = "results";
    //container.id = 
    container.innerHTML = "<h1> THE RESULTS ARE IN <br></h1>" + "<h2>" + result + "</h2>" //JSON.stringify(obj)
        // insert container in 'root' div
    root.appendChild(container)



}

// This function compares if the selected story and selection matches userSelection