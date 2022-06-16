import { getStyles, setStyle } from "./database.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === 'style'){
            setStyle(parseInt(event.target.value))
        }
    }
)



//map funciton iterates the array like a for of loop and also invokes the function
export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(style => {
     return `<li>
       <input type="radio" name="style" value="${style.id}" /> ${style.style}
  </li>`
    })


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}


// for (const metal of metals) {
//     html += `<li>
//         <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
//     </li>`
// }


// const listItems = sizes.map(size => {
//     return `<li>
//         <input type="radio" name="size" value="${size.id}" /> ${size.carets}
//     </li>`
// })