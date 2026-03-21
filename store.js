let itemsList = [
    {name: "pinecone", price: "5.68", img: "https://shop.smallpetselect.com/cdn/shop/products/pinecone-product_1024x1024_91bbc362-ffbd-4814-9537-67779a01942e.jpg?v=1741870863"},
    {name: "something", price: "9.03", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKoRn4WBlIkKTXHvFHbT_rTpJlv8jVLmcW7Q&s"},
    {name: "????", price: "0.00", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKoRn4WBlIkKTXHvFHbT_rTpJlv8jVLmcW7Q&s"},
    {name: "what", price: "-3.30", img: "google.com/image.png"},
    {name: "uh", price: "9.01", img: "something.png"}
]

window.onload = function() {
    let storeGrid = document.getElementById("store-grid");

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
        
        storeGrid.append(div)
    })
}
















let subList = itemsList.filter(e => e.name.includes(searchbar.value))

let searchResults = document.getElementById("search-results")
searchResults.replaceChildren()

for (let item of subList) {
    let button = document.createElement("button")
    button.innerText
}