 let itemslist = [
    {name: "bloxycola" , price: "$250 ($1,000 per shipment)."}
 ]

function onType() {
    
    let search = document.getElementById("search")
   
   let subList = itemslist.filter(e =>e.name.includes(search)) 
   if (search.value.length === 0) {
        subList = []
   }

   for (let item of subList) {
        let scearchResult = document.createElement("div")
        let ResultText = document.getElementById("p")

        ResultText.innerText = item.name

        searchResult.append(ResultText)
   }
}