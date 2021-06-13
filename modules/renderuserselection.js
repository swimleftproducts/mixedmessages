    import { assignEvents } from './assignevents.js'

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

        //creating icons inside of conatiner for showing 
        //selection options
        for (let i = 0; i < 6; i++) {

            const icon = document.createElement('div');
            icon.className = 'icon otherclass';
            icon.innerHTML = `<br>will be icon image ${i+1}`
            icon.id = `icon${i}`
            container.appendChild(icon)
        }
        assignEvents("icon")

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

        assignEvents(currentButton, obj)



    }