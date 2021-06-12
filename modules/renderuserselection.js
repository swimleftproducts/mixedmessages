    
    
    //creating icons inside of conatiner for showing 
    //selection options
    for (let i = 0; i < 6; i++) {
        
        const icon= document.createElement('div');
        icon.className ='icon';
        icon.innerHTML = `<br>will be icon image ${i+1}`
        icon.id=`icon${i}`
        container.appendChild(icon)
    }