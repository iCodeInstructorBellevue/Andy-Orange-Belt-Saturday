const pressThing = document.createElement("button")
const timeText = document.createElement("p")
const nextSecondsText = document.createElement("p")
const thing = document.createElement("p")
let lastTime = Date.now()
let nextSeconds = Math.ceil(Math.random() * 10)
nextSecondsText.textContent = "Press button in " + nextSeconds + " seconds"

pressThing.textContent = "Press Me"
pressThing.addEventListener("click", function () {
    const nowTime = Date.now()
    timeText.textContent = ((nowTime - lastTime) / 1000) + " seconds"
    // TODO: make this do smt if player clicks correctly
    if () {
        thing.textContent = "????????????????????????????"
    } else {
        thing.textContent = "no"
    }
    lastTime = nowTime
    nextSeconds = Math.ceil(Math.random() * 10)
    nextSecondsText.textContent = "Press button in " + nextSeconds + " seconds"
})


document.body.appendChild(nextSecondsText)
document.body.appendChild(pressThing)
document.body.appendChild(timeText)
document.body.appendChild(thing)