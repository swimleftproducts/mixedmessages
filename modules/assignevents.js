import {renderIntro} from './rendergameintro.js'

export function assignEvents() {
const button = document.getElementById("startButton");
button.addEventListener("click",function(){ 
    renderIntro();
    
    

});

}
  
