import { KneelDiamonds } from "./KneelDiamonds.js"


const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()

//document.dispatchEvent(new CustomEvent("stateChanged")) //not sure if this works here. just a broadcast notification
//this is step 3. this has global scope
//triggers after function in the database
//listening for and what to happen
document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})

