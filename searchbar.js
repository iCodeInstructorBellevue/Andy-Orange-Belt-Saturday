let itemsList = [
    {name: "air", price: "10000000000"},
    {name: "table", price: "29"},
    {name: "beans", price: "89"},
]

function onType() {
    let searchbar = document.getElementById("searchbar")

    let subList = itemsList
            .filter(e => e.name.includes(searchbar.value))
    if (searchbar.value.length === 0) {
        subList = []
    }

    // NEW
    let resultsDiv = document.getElementById("results")
    resultsDiv.replaceChildren()

    for (let item of subList) {
        let searchResult = document.createElement("div")
        let resultText = document.createElement("p")

        resultText.innerText = item.name

        searchResult.append(resultText)

        // NEW
        resultsDiv.append(searchResult)
    }
}