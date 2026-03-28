let number = 0

function clicked() {
    number = number + 1
    document.getElementById("a-number").innerText
       = number
}





// NEW
let something = false

function clicked2() {
    let clickElem = document.getElementById("click-me-2")

    if (something) {
        clickElem.className = "not-clicked"
        something = false
    } else {
        clickElem.className = "clicked"
        something = true        
    }
}