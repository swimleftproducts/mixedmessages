const gameSetUp = {
    //this array contains all possible stories and associated info
    stories: [{
            id: "1",
            title: "The dark night",
            background1: "The town needs your help tracking down the masked man who is terrorizing town",
            introImage: "./typewriter.jpg",
            hintImage: "./example.png",
            images: {
                weapon: {
                    image: ['./image 1', './image 2'],
                    id: ['gun', 'claws', 'hammer', 'fist', 'car', 'axe']
                },
                name: {
                    image: ['./image 1', './image 2'],
                    id: ['adam', 'mike', 'lucy', 'tim', 'bruce', 'tony']
                },
                location: {
                    image: ['./image 1', './image 2'],
                    id: ['mountain', 'car', 'gotham', 'bridge', 'resturaunt', 'station']
                },

            },

            background2: "With this man keeping a watch, there is no future for the  honest hardworking criminal",
            weapon: "fists",
            location: "gotham",
            name: "bruce",
            weaponHint: "capow, not bang",
            weaponHintLong: "WEAPON Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            locationHint: "worse than new york",
            locationHintLong: " LOCATION Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            nameHint: "wayne enterprises CEO",
            nameHintLong: " NAME Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            game: 0,
            cheat: () => {

            },
            // location, weapon then name

            userSelection: []
        },
        {
            id: "2",
            background2: "With this man keeping a watch, there is no future for the  honest hardworking criminal",
            weapon: "fists",
            location: "gotham",
            name: "bruce",
            weaponHint: "capow, not bang",
            weaponHintLong: "weapon Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            locationHint: "worse than new york",
            locationHintLong: "location Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, .",
            nameHint: "wayne enterprises CEO",
            nameHintLong: "name Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
            game: 0,
            cheat: () => {

            },
        },
    ],


    storyInUse: 4,



    // this method chooses what story to use
    choose: function() {
        // pick random story, the random is removed for now
        // const num = Math.floor(Math.random() * this.stories.length)

        let num = 0
            // this methhod returns a random story the story
        this.storyInUse = num
        return this.stories[0];

    },

    //  method to add user input
    userSelection(event, forWhat) {
        let selection = event.target.id;

        // I want a way to know which user seleciton I am setting 
        // weapon , name or location?
        //let forWhat = "weapon";


        if (forWhat === "name") {
            this.stories[this.storyInUse].userSelection[0] = selection;
        } else if (forWhat === "weapon") {
            this.stories[this.storyInUse].userSelection[1] = selection;
        } else {
            this.stories[this.storyInUse].userSelection[2] = selection;
        }

        console.log(this.stories[this.storyInUse].userSelection)

    },

    //this method is ran every time the user does a new selction. This
    // method makes sure only 1 selection string is entered into the
    //user input array 
    checkUserInput() {
        console.log("checking input")
    }


}

export { gameSetUp };