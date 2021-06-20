import { renderIntro } from './rendergameintro.js'
import { gameSetUp } from './storylines.js';
import { renderUserSelection } from './renderuserselection.js';
import { renderHints } from './renderhintspages.js'
import { renderResults } from './renderresults.js'

// this function assigns the event listeners and defines what functions they call. It takes is a name and then assigns functions according to that name this is done so that we can assign events for elements that do not get created untill later in the game. This approach is nice because we can keep ALL event assignment functionality in here.


export function assignEvents(name, obj, timeThrough) {

    //this if statement sets listeners for the start button on first page
    // also, this fuction reates the story object for the game
    if (name === "startButton") {
        const button = document.getElementById("startButton");
        //adding the event listener
        button.addEventListener("click", function() {
            const thisStory = gameSetUp.choose();
            renderIntro(thisStory);
        })
    };

    // this if statement sets listeners for the button to move to hints page
    if (name === "onToHintsButton") {

        const button = document.getElementById("onToHintsButton");
        button.addEventListener("click", function() {
            renderHints(obj, "location", timeThrough);
        })
    };


    // this if statement sets listeners for the button to move into user selection
    if (name === "onToSelectionButton") {

        const button = document.getElementById("onToSelectionButton");
        button.addEventListener("click", function() {
            renderUserSelection(obj, "name");
        })
    };


    // this if statement sets listeners for the button to move into user selection for Weapons
    if (name === "onToWeaponSelectionButton") {

        const button = document.getElementById("onToWeaponSelectionButton");
        button.addEventListener("click", function() {

            renderUserSelection(obj, "weapon");
        })
    };

    // this if statement sets listeners for the button to move into user selection for Weapons
    if (name === "onToLocationSelectionButton") {

        const button = document.getElementById("onToLocationSelectionButton");
        button.addEventListener("click", function() {

            renderUserSelection(obj, "location");
        })
    };

    // this if statement sets listeners for the button to move into user selection for Weapons
    if (name === "onToResultsButton") {

        const button = document.getElementById("onToResultsButton");
        button.addEventListener("click", function() {

            renderResults(obj);
        })
    };

    //set listener on the icons for setting user values
    if (name === "icon") {
        const icon = document.getElementsByClassName("icon");
        console.log(icon)
        for (let i = 0; i < icon.length; i++) {
            icon[i].addEventListener("click", function(event) {
                console.log('selected input ' + event.target.id);
                //adding the selected inputs to the userSelection list from storylines.js
                gameSetUp.stories[0].userSelection.push(event.target.id)
                console.log(gameSetUp.stories[0].userSelection)
            })
        };

    };

}