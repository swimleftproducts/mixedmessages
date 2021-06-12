//import needed modules
import {assignEvents} from './assignevents.js';


// this function takes in an object that represents the 
//storyline for this game. The function then renders
// the relevant intro page
export const renderIntro =(obj) =>{
    const root = document.getElementById("root");
    // remove all html 
    while (root.firstChild) {
        root.removeChild(root.lastChild); 
    }
    const container= document.createElement('div');
    container.className = "container"
    // insert container in 'root' div
    root.appendChild(container)

    //This for loop adds in 'div' elements into the intro page these are filled in with text pulled from the story line object. also an image is inserted here
    for (let i = 0; i < 3; i++) {
        
        const element= document.createElement('div');
        if(i===0){
            element.innerHTML=obj.background1
        }else if(i===1){
            element.innerHTML=`<img src="${obj.introImage}" ></img>`;
        }else{

            element.innerHTML= obj.background2
        }
        
        // each new elmenet is appeneded onto the container as a child.
        container.appendChild(element)
    }
    //build button for selecting next set of options
    const button= document.createElement('button');
    button.id="onToSelectionButton"        
    button.innerHTML= "On to selection"
      
    root.appendChild(button)
    assignEvents('onToSelectionButton',obj)
    
}