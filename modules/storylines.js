
const gameSetUp = {
    //this array constains all possible stories and associated info
    stories: [
    {
        id:"1",
        title: "The dark night",
        background1: "The town needs your help tracking down the masked man who is terrorizing town",
        introImage: "./example.png",
        hintImage: "./example.png",
        images : {
            weapon: {
                image: ['./image 1','./image 2'],
                id: ['gun', 'claws', 'hammer', 'fist','car','axe']
            },
            name: {
                image: ['./image 1','./image 2'],
                id: ['adam', 'mike', 'lucy', 'tim','bruce', 'tony']
            },
            location: {
                image: ['./image 1','./image 2'],
                id: ['mountain', 'car', 'gotham', 'bridge', 'resturaunt', 'station']
            }

        },
       
        background2: "With this man keeping a watch, there is no future for the  honest hardworking criminal",
        weapon: "fists",
        location: "gotham",
        name: "bruce" ,
        weaponHint: "capow, not bang",
        weaponHintLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        locationHint: "worse than new york",
        locationHintLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        nameHint: "wayne enterprises CEO" ,
        nameHintLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        game: 0,
        cheat: ()=>{ 
        
        },
        userSelection: []
    },   
    {
        id:"2"
    },
    ],

    // this method chooses what story to use
    choose: function(){
    // pick random story, the random is removed for now
        const num = Math.floor(Math.random()*this.stories.length)
        
    // this methhod returns a random story the story
        return this.stories[0];

    }
}

export {gameSetUp};