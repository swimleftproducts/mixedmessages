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
                    image: ['./example.png', './example.png', './example.png', './BatmanGloves.jpeg', './example.png', './example.png'],
                    id: ['gun', 'claws', 'hammer', 'fists', 'car', 'axe']
                },
                name: {
                    image: ['./example.png', './example.png', './example.png', './example.png', './BruceWayne.jpg', './example.png', ],
                    id: ['adam', 'mike', 'lucy', 'tim', 'bruce', 'tony']
                },
                location: {
                    image: ['./example.png', './example.png', './GothamImage.jpeg', './example.png', './example.png', './example.png', ],
                    id: ['mountain', 'car', 'gotham alley', 'bridge', 'restaurant', 'station']
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
            weaponHintLong1: "According to the GPD, they found a mysterious and a piece of dark cloth that along the side of the road. The GPD also said that the cloth was made of a very high quality material.",
            locationHint: "worse than new york",
            locationHintLong1: "There is a rumor that 3 blocks from the crime scene, there is a person who might know the killer. Rumor also said that the person can be found in the 11th floor of the tallest building in the city.",
            nameHint: "wayne enterprises CEO",
            nameHintLong1: "There was a fallen card right next to the garbage. It was wet and was not readable but it seems there is a logo on the right top corner of card.",
            game: 0,
            cheat: () => {

            },
            // location, weapon then name

            userSelection: [],
        },
        {
            id: "2",
            title: "The Shire",
            background1: "The shire needs your help in finding the creature that is terrorizing the hobbits. Luckily, each attack has resulted in hints left behind...",
            introImage: "./assets/2/introimage.png",
            hintImage: "./assets/2/hintimage.jpeg",
            images: {
                weapon: {
                    image: ['./assets/2/weaponimages/1.jpeg', './assets/2/weaponimages/2.jpeg', './assets/2/weaponimages/3.jpeg', './assets/2/glamdring.jpeg', './assets/2/weaponimages/5.jpeg', './assets/2/weaponimages/6.jpeg'],
                    id: ['orc Axe', 'fists', 'sword', 'Glamdring', 'spell', 'elvish dagger']
                },
                name: {
                    image: ['./assets/2/nameimages/1.png', './assets/2/nameimages/1.png', './assets/2/nameimages/1.png', './assets/2/nameimages/1.png', './assets/2/nazgul.jpeg', './assets/2/nameimages/1.png' ],
                    id: ['goblin', 'orc', 'Sam', 'Gladriel', 'Nazgul', 'Bilbo']
                },
                location: {
                    image: ['./assets/2/locationimages/1.png', './assets/2/locationimages/1.png', './assets/2/hobbiton.jpeg', './assets/2/locationimages/1.png', './assets/2/locationimages/1.png', './assets/2/locationimages/1.png' ],
                    id: ['Anduin River', 'Moria', 'Hobbiton', 'Fargorn', 'Isengard', 'Mirkwood']
                },

            },

            background2: ``,
            weapon: "Glamdring",
            weaponImage: "./assets/2/glamdring.jpeg",
            location: "Hobbiton",
            locationImage: "./assets/2/hobbiton.jpeg",
            name: "Nazgul",
            nameImage: "./assets/2/nazgul.jpeg",
            weaponHint: "Powerful Weapon",
            weaponHintLong1: "This weapon was build by elvish hands",
            weaponHintLong2:"Later it was wield by Gandolf. How did the killer get it?",
            locationHint: "A basic place",
            locationHintLong1: "There is a rummor that the town where the killings took place is a main town in the shire .",
            locationHintLong1: "Sam Gamgee was particularlly attentive to healing this area with soil from Galadriel",
            nameHint: "An evil spirit",
            nameHintLong1: "The killer was one of the nine",
            nameHintLong2: "Whos voice strikes fear into mortals",
            game: 0,
            cheat: () => {

            },
            // location, weapon then name

            userSelection: [], 
        },
    ],


    storyInUse: null,



    // this method chooses what story to use
    choose: function() {
        // pick random story, the random is removed for now
        const num = Math.floor(Math.random() * this.stories.length)
        console.log(num)
       // let num = 1
            // this methhod returns a random story the story
        this.storyInUse = num
        return this.stories[num];

    },

    //  method to add user input
    userSelection(event, forWhat) {
        let selection = event.currentTarget.id;

        // I want a way to know which user seleciton I am setting 
        // weapon , name or location?
        //let forWhat = "weapon";


        if (forWhat === "name") {
            this.stories[this.storyInUse].userSelection[0] = selection;
            console.log(this.stories[this.storyInUse].userSelection)
        } else if (forWhat === "weapon") {
            this.stories[this.storyInUse].userSelection[1] = selection;
            console.log(this.stories[this.storyInUse].userSelection)
        } else {
            this.stories[this.storyInUse].userSelection[2] = selection;
            console.log(this.stories[this.storyInUse].userSelection)
        }

    },

}
export { gameSetUp };