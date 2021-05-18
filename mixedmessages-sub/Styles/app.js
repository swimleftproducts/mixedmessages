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
}
// is there a what to have this code identify which button was clicked so that we can use the same code for each name button like this http://jsfiddle.net/R77EB/


