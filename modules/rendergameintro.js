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
    for (let i = 0; i < 3; i++) {
        
        const element= document.createElement('div');
        if(i===0){
            element.innerHTML=obj.title
        }else if(i===1){
            element.innerHTML=obj.weaponHint
        }else{

            element.innerHTML= "are you ready to play?"
        }
        

        container.appendChild(element)
    }
    //build button for selecting next set of options
    const button= document.createElement('button');
    button.innerHTML= "On to selection"
    
    root.appendChild(button)
    
    
}