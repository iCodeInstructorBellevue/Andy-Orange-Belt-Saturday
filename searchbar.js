let itemsList = [
    {name: "air", price: "-10000000000", img: "https://www.cookmuseum.org/wp-content/uploads/2020/09/air-image-cropped.jpg"},
    {name: "table", price: "29", img: "https://www.simpli-home.com/cdn/shop/files/AXCDNT-003-OAK_Silo_Detail_1.jpg?v=1765468260&width=2560"},
    {name: "beans", price: "89", img: "https://www.recipetineats.com/tachyon/2014/05/Homemade-Heinz-Baked-Beans_0-SQ.jpg?resize=500%2C500"},
]

function onType() {
    let searchbar = document.getElementById("searchbar")
    let subList = itemsList.filter(
        e => e.name.includes(searchbar.value)
    )









            























    if (searchbar.value.length === 0) {
        subList = []
    }






    let resultsDiv = document.getElementById("results")
    resultsDiv.replaceChildren()






    for (let item of subList) {
        let searchResult = document.createElement("div")
        let resultText = document.createElement("p")

        resultText.innerText = item.name

        resultText.addEventListener("click", onResultClick.bind(null, item.price, item.img))

        searchResult.append(resultText)
        resultsDiv.append(searchResult)
    }
}

function onResultClick(priceIn, imgLinkIn, eventIn) {
    let cartDiv = document.getElementById("cart-section")

    let cartText = document.createElement("p")
    cartText.innerText = eventIn.target.innerText + " :: " + priceIn

    let cartImg = document.createElement("img")
    cartImg.src = imgLinkIn

    cartDiv.append(cartImg)
    cartDiv.append(cartText)







    cartText.addEventListener("click", (eventIn_) => {
        let popup = document.createElement("div")
        popup.className = "popup"
        let popupText = document.createElement("p")
        popupText.innerText = "what?"
        popup.append(popupText)
        document.body.append(popup)

        let cartTextRect = cartText.getBoundingClientRect()
        popup.style.left = cartTextRect.left + window.scrollX
        popup.style.top = cartTextRect.top - 15 - cartTextRect.height + window.scrollY
        
        setTimeout(() => {
            popup.remove()
        }, 1500)
    })
}