let number = 0

// NEW
let something = false

function clicked() {
    number = number + 1
    document.getElementById("a-number").innerText = number
}

function clicked2() {
    if (something) {
        document.getElementById("click-me-2").style.color = "black"
        something = false
    } else {
        document.getElementById("click-me-2").style.color = "red"
        something = true        
    }
    
    
}