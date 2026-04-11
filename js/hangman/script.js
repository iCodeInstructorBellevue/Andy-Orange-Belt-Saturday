const words =["icode", "hiro", "green", "f1"];
let word = words[Math.floor(Math.random() * words.length)]
const answersArray = [ ];
for(let i = 0; i < word.length; i++) {
    answersArray[i] = "_"
}
let remainingLetters = word.length;
while(remainingLetters > 0) {
    alert(answersArray.join(" "))
    let guess = prompt("guess a letter");
    if (guess === null){
        break;
    }
    else if(guess.length !== 1){
    alert("Please enter a single letter,")
    }else{
     guess = guess.toLowerCase()
     for (let j = 0; j < word.length; j++) {
    if (word[j] === guess) {
    answersArray[j] = guess
    remainingLetters--;
    }
     }
    }
}
alert(answersArray.join(" "));
alert("Good job! The answer was " + word);
