import { addCustomOrder, getOrders, getMetals } from "./database.js"

const metals = getMetals()

// Remember that the function you pass to find() must return true/false

const buildOrderListItem = (order) => {

    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )

    const totalCost = foundMetal.price
    return `<li>
    Order costs $${totalCost}
    </li>`
   // Order #${order.id} was placed on ${order.timestamp}
}





export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}



//add click event here to orders button. this will be part 1
//link event by the id is orderButton
//for creating new data

document.addEventListener(
    'click',
    (event) => {
        const itemClicked = event.target
        if (itemClicked.id === 'orderButton') {
            //create new object to save in the database
            addCustomOrder()
        }
        console.log('log')
    })




