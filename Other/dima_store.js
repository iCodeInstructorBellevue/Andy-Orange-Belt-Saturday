import {itemsList} from "./store_items.js"

let cartItems = [];
const cartItemsElement = document.getElementById('cart-items');

function loadCartItems() {
    cartItemsElement.innerHTML = '';

    cartItems.forEach(item => {
        let citem = document.createElement('div');

        citem.classList.add("cart-item");

        citem.innerHTML = `
            <h3>${item.name}</h3>
            <p>$${item.price}</p>
        `;

        cartItemsElement.appendChild(citem);
    });
}

 function addToCart(name, price) {
    let cartItem = { name, price };

    cartItems.push(cartItem);

    loadCartItems();
}

window.addToCart = addToCart;

window.onload = function() {

    loadCartItems()
    let Store_Grid = this.document.getElementById("Store_Grid")

    itemsList.forEach(item => {
        const div = document.createElement("div");

        const img = document.createElement("img")
        const name = document.createElement("p")
        const price = document.createElement("p")
        const addToCartBtn = document.createElement("button")

        // img.src = item.img
        // name.innerText = item.name
        // price.innerText = "$" + item.price
        // addToCartBtn.innerText = "Add to Cart"

        // div.append(img)
        // div.append(name)
        // div.append(price)
        // div.append(addToCartBtn)

        // Store_Grid.append(div)

        div.innerHTML = `
        <img src='${item.img}'>

        <P>${item.name}</p>

        <p>$${item.price}</p>

        <button onclick="addToCart('${item.name}', ${item.price})">Add To Cart</button>
        `

        Store_Grid.appendChild(div);
    })
}