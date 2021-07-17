import { renderIntro } from './rendergameintro.js'
import { gameSetUp } from './storylines.js';
import { renderUserSelection } from './renderuserselection.js';
import { renderHints } from './renderhintspages.js'
import { renderResults } from './renderresults.js'

// this functivon assigns the event listeners and defines what functions they call. It takes is a name and then assigns functions according to that name this is done so that we can assign events for elements that do not get created until later in the game. This approach is nice because we can keep ALL event assignment functionality in here.


export function assignEvents(name, obj, timeThrough, forWhat) {

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
        });
        const backButton = document.getElementById("backButton");
        backButton.addEventListener("click", function() {
            renderIntro(obj)

        });

    };


    // this if statement sets listeners for the button to move into user selection
    if (name === "onToSelectionButton") {

        const button = document.getElementById("onToSelectionButton");
        button.addEventListener("click", function() {
            renderUserSelection(obj, "name");
        })
        const backButton = document.getElementById("backButton");
        backButton.addEventListener("click", function() {
            if (forWhat === "name") {
                timeThrough -= 1
                renderHints(obj, forWhat, timeThrough)
            }
        });
    };


    // this if statement sets listeners for the button to move into user selection for Weapons
    if (name === "onToWeaponSelectionButton") {

        const button = document.getElementById("onToWeaponSelectionButton");
        button.addEventListener("click", function() {

            renderUserSelection(obj, "weapon");
        })
        const backButton = document.getElementById("backButton");
        backButton.addEventListener("click", function() {
            console.log("testing")
        })
    };

    // this if statement sets listeners for the button to move into user selection for Weapons
    if (name === "onToLocationSelectionButton") {

        const button = document.getElementById("onToLocationSelectionButton");
        button.addEventListener("click", function() {

            renderUserSelection(obj, "location");
        })

        const backButton = document.getElementById("backButton");
        backButton.addEventListener("click", function() {
            console.log("testing")
        })
    };

    // this if statement sets listeners for the button to move into user selection for Weapons
    if (name === "onToResultsButton") {

        const button = document.getElementById("onToResultsButton");
        button.addEventListener("click", function() {

            renderResults(obj);
        })
        const backButton = document.getElementById("backButton");
        backButton.addEventListener("click", function() {
            console.log("testing")
        })
    };

    //set listener on the icons for setting user values
    if (name === "icon") {
        const icon = document.getElementsByClassName("icon");

        for (let i = 0; i < icon.length; i++) {
            icon[i].addEventListener("click", function(event) {

                // call method inside of story object to take in user input
                gameSetUp.userSelection(event, forWhat);
                // make sure user input only gets entered once into array
                // gameSetUp.checkUserInput();

            })
        };

    };

}