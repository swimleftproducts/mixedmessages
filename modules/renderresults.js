//import needed modules
import {assignEvents} from './assignevents.js';


// this function takes in an object that represents the 
//storyline for this game. The function then renders
// the relevant intro page
export const renderResults =(obj) =>{
    const root = document.getElementById("root");
    // remove all html 
    while (root.firstChild) {
        root.removeChild(root.lastChild); 
        
    }
    
   
    const container= document.createElement('div');
    container.className = "container"
    container.innerHTML="<h1> THE RESULTS ARE IN <br></h1>" + JSON.stringify(obj)
    // insert container in 'root' div
    root.appendChild(container)
    

    
}