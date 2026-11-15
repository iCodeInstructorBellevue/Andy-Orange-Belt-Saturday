const words = ["hellohello", "meowscling", "government", "strawberry", "skibididop", "jimmothies", "subabachin", "aaronfudge", "whoppersin", "platecrate", "fartmeists"];

const secretButton = document.createElement("button")
secretButton.id = "secret-button"
secretButton.textContent = "SECRET BUTTON"
secretButton.addEventListener("click", function() {
    alert("testing")
})

const popup = document.createElement("div")
popup.id = "popup"
let mysteryWord = words[Math.trunc(Math.random() * words.length)];

const displayText = document.createElement("p")
let displayList = []
for (let i = 0; i < mysteryWord.length; i++) {
    displayList.push("_")
}
displayText.textContent = displayList.join(" ")
let correct = false

// NEW
const guessInput = document.createElement("input")
guessInput.type = "text"
guessInput.placeholder = "Type ONE character"
const submitGuess = document.createElement("button")
submitGuess.textContent = "Guess"

submitGuess.addEventListener("click", function () {
    if (guessInput.value.length > 1 || guessInput.value.length === 0) {
        alert("INVAID INPUT")
    } else {
        correct = true
        // NEW
        let anyCorrect = false
        for (let i = 0; i < mysteryWord.length; i++) {
            if (guessInput.value === mysteryWord[i]) {
                displayList[i] = guessInput.value
                // NEW
                anyCorrect = true
            }
            if (displayList[i] !== mysteryWord[i]) {
                correct = false;
            }
        }
        displayText.textContent = displayList.join(" ")
        if (correct) {
            alert("ITS CORRECT ?????")
        }
    }
})

document.body.appendChild(popup)
popup.appendChild(displayText)
//
document.body.appendChild(secretButton)

// NEW
popup.appendChild(guessInput)
popup.appendChild(submitGuess)