import {renderIntro} from './rendergameintro.js'
import {gameSetUp} from './storylines.js';


// this function assigns the event listeners and defines what functions they vall


export function assignEvents() {

const button = document.getElementById("startButton");
button.addEventListener("click",function(){ 
    const thisStory=gameSetUp.choose();
    renderIntro(thisStory);  

});

}
  
