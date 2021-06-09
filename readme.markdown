**Conceptual layout **<br>

##./index.html <br>
  Master html page. <br>

##./index.js <br>
  Imports various modules and is the master file that controles the game <br>
  It should mostly call functions from modules and should not contain much logic <br>
  
##./modules
    /storyLines
      This module contains an object that containes multiple objects. Each object is a storyline
        exampleStory{
            title: "the dark night"
            weapon: "fists"
            location: "gotham"
            name: "bruce"
            weaponHint: "capow, not bang"
            locationHint: "worse than new york"
            nameHint: "wayne enterprises CEO"
            game: 1  // if you wanted to have different games for different stories
            cheatOn() =>{
            // some code that affects the gameplay to enable some typle of cheat code... no idea how this would be implimneted
            } 
        }
    /mainGameLogic
     This section will have all the game playing logic and will return whether the user wins or loses
    /gameWinDom
     this module will contain the DOM manipulation for onscreen modification based on the outcome of the game
    /miniGame
      This module contains everything associated with the mini game
      For example this will cover the logic of the game and all DOM manipulation code necessary to 
      impliment and play the game
    /domManipulation
      I wonder if it would make sense to have a module dedicated 
     
      
