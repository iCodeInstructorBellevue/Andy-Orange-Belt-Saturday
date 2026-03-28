let number = 0


function clicked() {
    number = number + 1
    document.getElementById("a-number").innerText = number
    alert("CLICK ME")
}
// NEW
let something = false

function clicked2() {
    let clickElem = document.getElementById("CLICK-ME-TO")

    if (something) {
        clickElem.className = "not-clicked"
        something = false
    } else {
        clickElem.className = "clicked"
        something = true
    } 
}
