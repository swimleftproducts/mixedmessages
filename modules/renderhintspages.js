//this render js file will be called 3 times, first to render location, then weapon then person, general layout is 3 divs 1 that is an image and 2 with text. The image will rotate downward in each render

//import assignevents to set listener on button
import {assignEvents} from './assignevents.js';

export const renderHints =(obj,forWhat,timeThrough) =>{
    //lets define an object that defines the page layout for each forWhat 
    if(!timeThrough){
        timeThrough=1
   }else if(timeThrough==1){
        forWhat="weapon"
        timeThrough++
   }else if(timeThrough==2){
    forWhat="name"
}

    const layouts = {
        location: [ 'img', 'text','text'],
        weapon: [ 'text','img','text'],
        name: [  'text','text','img',],
    }
    //pull root element
    const root = document.getElementById("root");
    // remove all html 
    while (root.firstChild) {
        root.removeChild(root.lastChild);    
    }

    // create container
    const container= document.createElement('div');
    container.className = "container"
    // insert container in 'root' div
    root.appendChild(container)

    console.log(forWhat)
    for (let i = 0; i < 3; i++) {
        
        const element= document.createElement('div');
      
        if (layouts[forWhat][i]==="img") {
            console.log(`<img src="${obj.hintImage}" ></img>`)
            element.innerHTML=`<img src="${obj.hintImage}" ></img>`;
        } else{
           element.innerHTML= obj.locationHintLong
        }
        
        // each new elmenet is appeneded onto the container as a child.
        container.appendChild(element)
    }
    //build button for selecting next set of options
    const button= document.createElement('button');
    
    if(timeThrough<2){
        button.id="onToHintsButton"        
        button.innerHTML= "There is more..."
        
        root.appendChild(button)
    
        assignEvents('onToHintsButton',obj,timeThrough)
    }else{
        button.id="onToSelectionButton"        
        button.innerHTML= "Time to make a choice"
        
        root.appendChild(button)
    
        assignEvents('onToSelectionButton',obj)
    }



}