    export const renderUserSelection = (obj,forwhat)=>{
        const root = document.getElementById("root");
        // remove all html 
        while (root.firstChild) {
            root.removeChild(root.lastChild); 
        }
        //create container
        const container= document.createElement('div');
        container.className = "container"
        // insert container in 'root' div
        root.appendChild(container)

        const hint= document.createElement('div');
        hint.className = "hint"

        // this switch statement helps us know what hint to pull from game object
        switch (forwhat) {
            case "weapon":
                hint.innerHTML= obj.weaponHint
                break;
        
            default:
                hint.innerHTML= "in default in switch"
                break;
        }
        

        container.appendChild(hint)

    //creating icons inside of conatiner for showing 
    //selection options
        for (let i = 0; i < 7; i++) {
           
            const icon= document.createElement('div');
            icon.className ='icon';
            icon.innerHTML = `<br>will be icon image ${i+1}`
            icon.id=`icon${i}`
            container.appendChild(icon)
        }
    }