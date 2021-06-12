import {renderIntro} from './rendergameintro.js'
import {gameSetUp} from './storylines.js';
import {renderUserSelection} from './renderuserselection.js';


// this function assigns the event listeners and defines what functions they call. It takes is a name and then assigns functions according to that name this is done so that we can assign events for elements that do not get created untill later in the game. This approach is nice because we can keep ALL event assignment functionality in here.


export function assignEvents(name,obj) {

//this if statement sets listeners for the start button on first page
// also, this fuction reates the story object for the game
if(name==="startButton"){    
const button = document.getElementById("startButton");
button.addEventListener("click",function(){ 
    const thisStory=gameSetUp.choose();
    renderIntro(thisStory);  
})};

// this if statement sets listeners for the button to move into user selection
if(name==="onToSelectionButton"){    
    
    const button = document.getElementById("onToSelectionButton");
    button.addEventListener("click",function(){ 
        renderUserSelection(obj,"name");
})};


// this if statement sets listeners for the button to move into user selection
if(name==="onToWeaponSelectionButton"){    
    
    const button = document.getElementById("onToWeaponSelectionButton");
    button.addEventListener("click",function(){ 
        renderUserSelection(obj,"weapon");
})};
if(name==="onToLocationSelectionButton"){    
    
    const button = document.getElementById("onToLocationSelectionButton");
    button.addEventListener("click",function(){ 
        renderUserSelection(obj,"location");
})};



}

  
