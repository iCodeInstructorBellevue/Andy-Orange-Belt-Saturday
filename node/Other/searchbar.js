let itemsList = [
    {name:"table", price: "29"},
    {name:"Flipper Zero", price: "10"},
    {name:"air", price: "100.00"},
    {name:"leaf", price: "1000.00"},
    {name:"shark", price: "-500"},
    {name:"USB Killer", price: "1.00"},
    {name:"USB-C Killer", price: "1.00"},
    {name:"lightning killer", price: "1.00"},
    {name:"Mini USB Killer", price: "1.00"},
    {name:"Hunter Cat", price: "10.00"},
    {name:"iCopy-XS", price: "6.00"},
    {name:"LAN Tap Pro", price: "5.00"},
    {name:"dog", price: "100000000000000"}
]

function onType() {
    console.log("hi")
    let searchbar = document.getElementById("searchbar")
    let subList = itemsList.filter(
        e => e.name.includes(searchbar.value)
    )
    if (searchbar.value.length === 0) {
        sublist = []
    }
    let resultsDiv = document.getElementById("results")
    resultsDiv.replaceChildren(
    )
    for (let item of subList) {
        let searchResult = document.createElement("div")
        let resultText = document.createElement("p")

        resultText.innerText = item.name

        resultText.addEventListener("click", onResultClick.bind(null, item.price))

        searchResult.append(resultText)
        resultsDiv.append(searchResult)
    }
}
function onResultClick(priceIn, eventIn) {
    let carts = document.getElementById("Cart")
    let cartText = document.createElement("p")
    cartText.innerText = eventIn.target.innerText + " :: "+ priceIn

    carts.append(cartText)
}