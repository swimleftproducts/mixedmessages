    import { assignEvents } from './assignEvents.js'

    export const renderUserSelection = (obj, forWhat) => {
        const root = document.getElementById("root");
        // remove all html 
        while (root.firstChild) {
            root.removeChild(root.lastChild);
        }
        //create container
        const container = document.createElement('div');
        container.className = "container"
            // insert container in 'root' div
        root.appendChild(container)

        const hint = document.createElement('div');
        hint.className = "hint"

        // this switch statement helps us know what hint to pull from game object
        switch (forWhat) {
            case "weapon":
                hint.innerHTML = obj.weaponHint
                break;
            case "name":
                hint.innerHTML = obj.nameHint
                break;
            case "location":
                hint.innerHTML = obj.locationHint
                break;

            default:
                hint.innerHTML = "in default in switch"
                break;
        }


        container.appendChild(hint)

        //creating icons inside of container for showing 
        //selection options
        for (let i = 0; i < 6; i++) {
            const icon = document.createElement('div');
            icon.className = 'icon';
            //creating 2 containers within icon. one for images and one for description
            for (let j = 0; j < 1; j++) {
                //this is for the image
                const iconImage = document.createElement('div')
                iconImage.className = 'icon-image'
                iconImage.innerHTML = `<img src="${obj.images[forWhat].image[i]}" id="testingImage" />`;
                icon.appendChild(iconImage);
                //this is for the description
                const iconDescription = document.createElement('div');
                iconDescription.className = 'icon-description';
                iconDescription.innerHTML = `${obj.images[forWhat].id[i]}`
                icon.appendChild(iconDescription);

            }
            // icon.innerHTML = `<img src="${obj.images[forWhat].image[i]}" width: auto; height: 80%>${obj.images[forWhat].id[i]}`
            //icon.id = `icon${i}`

            icon.id = obj.images[forWhat].id[i]
            container.appendChild(icon)
        }
        assignEvents("icon", undefined, undefined, forWhat)
            //logic to decide what to call button
        let currentButton = ''
        const button = document.createElement('button');
        switch (forWhat) {
            case "weapon":
                button.id = "onToLocationSelectionButton"
                currentButton = "onToLocationSelectionButton"
                break;
            case "location":

                button.id = "onToResultsButton"
                currentButton = "onToResultsButton"
                break;
            case "name":
                button.id = "onToWeaponSelectionButton"
                currentButton = "onToWeaponSelectionButton"
                break;
            default:
                button.innerHTML = "in default in switch"
                break;
        }

        button.innerHTML = "next"
        root.appendChild(button)
            // logic for setting button event listener

        // assignEvents(currentButton, obj);

        const backButton = document.createElement('button');
        backButton.id = "backButton"

        // switch (forWhat) {
        //     case "weapon":
        //         backButton.id = "onToLocationSelectionButton"
        //         currentButton = "onToLocationSelectionButton"
        //         break;
        //     case "location":

        //         backButton.id = "onToResultsButton"
        //         currentButton = "onToResultsButton"
        //         break;
        //     case "name":
        //         backButton.id = "onToWeaponSelectionButton"
        //         currentButton = "onToWeaponSelectionButton"
        //         break;
        //     default:
        //         backButton.innerHTML = "in default in switch"
        //         break;
        // }

        backButton.innerHTML = "back button"
        root.appendChild(backButton)
            // logic for setting button event listener

        assignEvents(currentButton, obj)


    }