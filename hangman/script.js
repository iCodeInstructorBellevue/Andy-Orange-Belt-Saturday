setTimeout(async () => {
const theThing = document.getElementById("thing");
const words = ["hellohello", "meowscling", "government", "strawberry", "skibididop", "jimmothies", "subabachin", "aaronfudge", "whoppersin", "platecrate", "fartmeists"];

const theWord = words[Math.trunc(Math.random() * words.length)];

let pickle = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"];
let wrongCount = 0;

alert(pickle.join(" "));

let correct = false;
while (!correct) {
    const guessLetter = prompt("Guess a letter");

    let i = 0;
    let anyCorrect = false;
    let allCorrect = true;
    for (let l of theWord) {
        if (l === guessLetter) {
            pickle[i] = l;
            anyCorrect = true;
        }
        if (pickle[i] !== theWord[i]) {
            allCorrect = false;
        }
        i += 1;
    }

    if (!anyCorrect) {
        wrongCount += 1;
        theThing.textContent = wrongCount;

        // making an image in javascript
        const myImg = document.createElement("img");
        myImg.src = "https://letstalkscience.ca/sites/default/files/2020-02/balanced-stones-on-a-pebble-beach.jpg";
        theThing.appendChild(myImg);
        
        await new Promise(r => setTimeout(r, 500));
    }

    alert(pickle.join(" "));

    if (allCorrect) {
        theThing.textContent = "CORRECT";
        break;
    }
}
}, 500);