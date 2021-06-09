<b>Conceptual layout </b><br>

<h1>./index.html </h1><br>
  Master html page. <br>
  We could try and setup a container in the center of the page that is dynamically painted from javascript
  rather than different html pages
 

<h1>./styles.css </h1><br>
  Master css page. <br>
 

<h1>./index.js </h1><br>
  Imports various modules and is the master file that controles the game <br>
  It should mostly call functions from modules and should not contain much logic <br>
  
<h1>./modules </h1><br>
    <h2> /storyLines.js </h2> <br>
     <p> This module contains an array that containes multiple objects. Each object is a storyline. This section would also 
      conatin the logic to choose a story for the game instance </p>
        exampleStory{ <br>
            title: "the dark night" <br>
            weapon: "fists" <br>
            location: "gotham" <br>
            name: "bruce" <br>
            weaponHint: "capow, not bang" <br>
            locationHint: "worse than new york" <br>
            nameHint: "wayne enterprises CEO" <br>
            game: 1  // if you wanted to have different games for different stories <br>
            cheatOn() =>{ <br>
            // some code that affects the gameplay to enable some typle of cheat code... no idea how this would be implimneted <br>
            } <br>
        }<br>
   <h2> /mainGameLogic.js </h2> <br>
     This section will have all the game playing logic and will return whether the user wins or loses
     we will set up an object that is the users play of the game. For example
     userPlay{
        
   <h2> /gameWinDom.js </h2> <br>
     this module will contain the DOM manipulation for onscreen modification based on the outcome of the game
   <h2>  /miniGame.js </h2> <br>
      This module contains everything associated with the mini game
      For example this will cover the logic of the game and all DOM manipulation code necessary to 
      impliment and play the game
    <h2> /domManipulation.js </h2> <br>
      I wonder if it would make sense to have a module dedicated to making changes in the DOM.
      
     
      
