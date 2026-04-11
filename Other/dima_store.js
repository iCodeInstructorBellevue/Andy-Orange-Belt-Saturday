import {itemsList} from "./store_items.js"

window.onload = function() {
    let Store_Grid = this.document.getElementById("Store_Grid")

    itemsList.forEach(item => {
        const div = document.createElement("div");

        const img = document.createElement("img")
        const name = document.createElement("p")
        const price = document.createElement("p")
        const addToCartBtn = document.createElement("button")

        img.src = item.img
        name.innerText = item.name
        price.innerText = "$" + item.price
        addToCartBtn.innerText = "Add to Cart"

        div.append(img)
        div.append(name)
        div.append(price)
        div.append(addToCartBtn)

        Store_Grid.append(div)
    })
}