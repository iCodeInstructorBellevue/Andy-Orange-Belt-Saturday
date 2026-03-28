 let itemslist = [
     {name: "roblox" , price: "$100000000000000 ($100000000000000000000000000 per shipment)."},
     {name: "bloxycola" , price: "$250 ($1,000 per shipment)."},
 ]
function onType() {
    
    let search = document.getElementById("search")
   
   let subList = itemslist.filter(e =>e.name.includes(search.value)) 
   if (search.value.length === 0) {
        subList = []
   }
     //NEW
   let resultsDiv = document.getElementById("results")
   resultsDiv.replaceChildren()
   for (let item of subList) {
        let searchResult = document.createElement("div")
        let ResultText = document.createElement("p")

        ResultText.innerText = item.name

        searchResult.append(ResultText)
        //NEW
        resultsDiv.append(searchResult)
   }    
   
}