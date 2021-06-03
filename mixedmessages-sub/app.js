// setting up the user input array [name,location,weapon]
var userInput = ["", "", ""];

// creating variable that has array (sort of, it is actually an element list) of all button elements
const buttons = document.querySelectorAll('button');

//iterating through each button to set event listener
buttons.forEach((button) => {
    // using a test to set properties for all buttons except the submit button
    if (button.className !== "submit" && button.className !== "play-again") {
        // and for each one we add a 'click' listener
        button.addEventListener('mouseover', mOver);
        button.addEventListener('mouseout', mOut);
        button.addEventListener('click', mClick);
        // setting a new property [hasBeenClicked] on each button element object
        button.hasBeenClicked = false;
    } else if (button.className === "submit" && button.className !== "play-again") {
        //what runs for the submit button
        button.addEventListener('mouseover', mOver);
        button.addEventListener('mouseout', mOut);
        button.addEventListener('click', submitClick);
    } else if (button.className === "play-again" && button.className !== "submit") {
        //resetting the page for a new game
        button.addEventListener('mouseover', mOver);
        button.addEventListener('mouseout', mOut);
        button.addEventListener('click', playAgain)
    }
});

// setting the program on submit
function submitClick(e) {

    // Run the game
    takeUserInput(userInput);

    // visual effects to show submitted
    e.target.style.backgroundColor = "white";
    e.target.style.color = "black";
    e.target.innerText = "Submitted";
    //this hides the main content to be overwritten for the result
    document.querySelector('.main-content').hidden = true;
    document.querySelector('.results-page').style.visibility = 'visible';
    document.getElementById('user-input').innerHTML = userInput[0] + "  " + userInput[1] + "  " + userInput[2];
};


// setting mouse over effect
function mOver(e) {
    e.target.style.backgroundColor = "white"
    e.target.style.color = "black"
};

// setting mouse out effect
function mOut(e) {
    // testing to see if the current button is the previously selected button
    if (e.target.hasBeenClicked === true) {
        e.target.style.backgroundColor = "white"
        e.target.style.color = "black"
    } else {
        // using "" sets the style back to the settings defined in the CSS
        e.target.style.backgroundColor = ""
        e.target.style.color = ""
    }

};

function mClick(e) {

    // figure out which class of buttons was clicked
    // var clickClass= e.target.className;
    var clickClass = e.target.dataset.name
        //pull list of all buttons of that class and reset bg
        //const buttons = document.getElementsByClassName(clickClass);
    const buttons = document.querySelectorAll("[data-name='" + clickClass + "']")

    // reset background and hasBeenClicked value
    for (let i = 0; i < buttons.length; i++) {
        const element = buttons[i];
        element.style.backgroundColor = ""
        element.style.color = ""
        element.hasBeenClicked = false
    }

    // set hasBeen Clicked to true for this button
    e.target.hasBeenClicked = true;

    // set the user input value to reflect the current choice
    // this tests what the class of the current event target is. Then uses this class to set the value of the target to the correct index in the userInput array.
    if (clickClass === "name") {
        // this is an example of how to use the data-name attribute
        userInput[0] = e.target.dataset.value
        console.log("name")

        // console.log("name")
    } else if (clickClass === "weapon") {
        userInput[1] = e.target.dataset.value
        console.log("weapon")
    } else {
        userInput[2] = e.target.dataset.value
        console.log("location")
    }

    // set background color
    e.target.style.backgroundColor = "grey"
    e.target.style.color = "black"


    // console.log(userInput)
};
// Function for reloading the page
function playAgain() {
    location.reload()
}
