// create function that is called when a name button is clicked

function btnclick(clicked_id) {
// call reset cunfunction
    resetColor();
    //call active button change color function
    changeinColor(clicked_id);
}

// reset the background of all name buttons to black and color to white
function resetColor() {
    var elements = document.getElementsByClassName('nameButton'); // get all elements
    
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "black";
        elements[i].style.color = "white";
        elements[i].style.backgroundColor.hov = "black";
        // add any other style reset items
	}
}


// set background of selected button to white and color to black
function changeinColor(clicked_id) {
    
    document.getElementById(clicked_id).style.backgroundColor = "white";
    document.getElementById(clicked_id).style.color = "black";
    // add a new key [userclicked] to the target id object, when clicked the vlaue of this 
    //key is set to true
    document.getElementById(clicked_id).userclicked="true"
}



// calling set onactive handler
giveButtonActiveEffect()

// Setting active state of the button with java sctipt to avoid using hover


function giveButtonActiveEffect() {
    
    var elements = document.getElementsByClassName('nameButton'); // get all elements
    
   
	for(var i = 0; i < elements.length; i++){
       elements.userclicked=false
                
		elements[i].addEventListener ("mouseover", function( event ) {
            // highlight the mouseover target
            event.target.style.color = "black";
            event.target.style.backgroundColor="white"
            
        },false);
        elements[i].addEventListener ("mouseout", function( event ) {
            //if button is clicked and turned white, leave it white   
            console.log(event.target.userclicked) 
            if(event.target.userclicked){
                //do nothing
            }else{
            // highlight the mouseover target
                event.target.style.color = "white";
                event.target.style.backgroundColor="black"  
                event.target.userclicked=false
                
            }
          }, false);

    } 
}


function setHover(element){
    element.backgroundColor="red"
    element.color="green"
}
