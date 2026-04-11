import { itemsList } from "./items.js" 

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


    cartText.addEventListener("click", () => {
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

window.onType = onType