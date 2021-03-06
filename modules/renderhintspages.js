//this render js file will be called 3 times, first to render location, then weapon then person, general layout is 3 divs 1 that is an image and 2 with text. The image will rotate downward in each render

//import assignevents to set listener on button
import { assignEvents } from './assignEvents.js';

export const renderHints = (obj, forWhat, timeThrough) => {
    //lets define an object that defines the page layout for each forWhat 
    if (!timeThrough) {
        timeThrough = 1
    } else if (timeThrough == 1) {
        forWhat = "weapon"
        timeThrough = 2
    } else {
        forWhat = "name"
        timeThrough = 3
    }

    const layouts = {
            location: ['img', 'text', 'text'],
            weapon: ['text', 'img', 'text'],
            name: ['text', 'text', 'img', ],
        }
        //pull root element
    const root = document.getElementById("root");
    // remove all html 
    while (root.firstChild) {
        root.removeChild(root.lastChild);
    }

    // create container
    const container = document.createElement('div');
    container.classList.add("container")
    container.classList.add("hints")
        // insert container in 'root' div
    root.appendChild(container)


    //the section below creates the text and image on page

    for (let i = 0; i < 3; i++) {
        // creat key for pulling hints from object
        let hintKey = forWhat + 'HintLong1'
        const element = document.createElement('div');
        if (layouts[forWhat][i] === "img") {

            element.innerHTML = `<img src="${obj.hintImage}" ></img>`;
        } else {
            element.innerHTML = obj[hintKey]
            element.classList.add("hintdiv")
        } 
        // each new elmenet is appeneded onto the container as a child.
        container.appendChild(element)
    }

    //build button for selecting next set of options and render next page
    const button = document.createElement('button');
    const backButton = document.createElement('button');
    if (timeThrough < 3) {
        button.id = "onToHintsButton"
        button.innerHTML = "There is more..."
        backButton.id = "backButton"
        backButton.innerHTML = "back button"

        root.appendChild(button)
        root.appendChild(backButton)
        assignEvents('onToHintsButton', obj, timeThrough,forWhat)
    } else {
        button.id = "onToSelectionButton"
        button.innerHTML = "Time to make a choice"
        backButton.id = "backButton"
        backButton.innerHTML = "back button"
        root.appendChild(button)
        root.appendChild(backButton)
        assignEvents('onToSelectionButton', obj, timeThrough, forWhat)
    }
}