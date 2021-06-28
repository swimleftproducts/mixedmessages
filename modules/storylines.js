const gameSetUp = {
    //this array contains all possible stories and associated info
    stories: [{
            id: "1",
            title: "The dark night",
            background1: "The town needs your help tracking down the masked man who is terrorizing town",
            introImage: "./typewriter.jpg",
            hintImage: "./WayneEnterpriseBuilding.jpg",
            images: {
                weapon: {
                    image: ['./image 1', './image 2'],
                    id: ['gun', 'claws', 'hammer', 'fists', 'car', 'axe']
                },
                name: {
                    image: ['./image 1', './image 2'],
                    id: ['adam', 'mike', 'lucy', 'tim', 'bruce', 'tony']
                },
                location: {
                    image: ['./image 1', './image 2'],
                    id: ['mountain', 'car', 'gotham alley', 'bridge', 'resturaunt', 'station']
                },

            },

            background2: `"With this man keeping a watch, there is no future for the honest hardworking criminal. The killer seems to be very well funded and knowledgeable. When the killer strikes, his method seems to be very well planned. The city Police department needs your help with the investigation. the GPD have some leads that can help you figuring out "WHO", "WHERE", and "WHAT WEAPON" the killer used in his recent attack.`,
            weapon: "fists",
            weaponImage: "./BatmanGloves.jpeg",
            location: "gotham alley",
            locationImage: "GothamImage.jpeg",
            name: "bruce",
            nameImage: "./BruceWayne.jpg",
            weaponHint: "Capow, not bang",
            weaponHintLong: "According to the GPD, they found a mysterious and a piece of dark cloth that along the side of the road. The GPD also said that the cloth was made of a very high quality material.",
            locationHint: "worse than new york",
            locationHintLong: "There is a rumor that 3 blocks from the crime scene, there is a person who might know the killer. Rumor also said that the person can be found in the 11th floor of the tallest building in the city.",
            nameHint: "wayne enterprises CEO",
            nameHintLong: "There was a fallen card right next to the garbage. It was wet and was not readable but it seems there is a logo on the right top corner of card.",
            game: 0,
            cheat: () => {

            },
            // location, weapon then name

            userSelection: [],
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

    //this method is ran every time the user does a new selection. This
    // method makes sure only 1 selection string is entered into the
    //user input array 
    checkUserInput() {
        console.log("checking input")
    }


}
console.log(gameSetUp.stories[0].weapon + ' ' + gameSetUp.stories[0].location + ' ' + gameSetUp.stories[0].name)
export { gameSetUp };