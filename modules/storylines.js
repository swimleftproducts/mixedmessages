
const gameSetUp = {
    //this array constains all possible stories and associated info
    stories: [
    {
        id:"1",
        title: "The dark night",
        weapon: "fists",
        location: "gotham",
        name: "bruce" ,
        weaponHint: "capow, not bang",
        locationHint: "worse than new york",
        nameHint: "wayne enterprises CEO" ,
        game: 0,
        cheat: ()=>{ 
        
        }

    },   
    {
        id:"2"
    },
    ],

    // this method chooses what story to use
    choose: function(){
    // pick random story, the random is removed for now
        // const num = Math.floor(Math.random()*this.stories.length)
        
    // this methhod returns the story
        return this.stories[0];

    }
}

export {gameSetUp};