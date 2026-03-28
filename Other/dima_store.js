let itemsList = [
    {name: "Flipper Zero", price: "0.50", img: "https://hackerwarehouse.com/wp-content/uploads/2022/09/flipper-zero-ss20220830-510x298.jpg"},
    {name: "USB Killer", price: "1.00", img: "http://127.0.0.1:5500/Images/th.jpg"},
    {name: "USB-C Killer", price: "1.00", img: "http://127.0.0.1:5500/Images/USB-C_Killer.jpg"},
    {name: "Lightning Killer", price: "1.00", img: "http://127.0.0.1:5500/Images/Lightning_Killer.jpg"},
    {name: "Mini USB Killer", price: "1.00", img: "http://127.0.0.1:5500/Images/Mini_USB%20%20Killer.jpg"},
    {name: "Hunter Cat", price: "10.00", img: "http://127.0.0.1:5500/Images/Hunter-Cat-v1.1-510x320.jpg"},
    {name: "iCopy-XS", price: "6.00", img: "http://127.0.0.1:5500/Images/icopy-xs-nikola.t.labs-rfid.cloner-454A0297a-510x339.jpg"},
    {name: "LAN Tap Pro", price: "5.00", img: "http://127.0.0.1:5500/Images/lantappro-019a-1024-510x383.jpg"},
]

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