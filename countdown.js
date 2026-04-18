let deadlineMS = new Date("april 19, 2026 15:43:00").getTime()

function updateCountdown() {
    let countDownElem = document.getElementById("countdown")
    let msDiff = deadlineMS - Date.now()

    let msInSec = 1000
    let msInMin = msInSec * 60
    let msInHr = msInMin * 60
    let msInDay = msInHr * 24

    let daysLeft = Math.floor(msDiff / msInDay)
    let hrsLeft = Math.floor((msDiff - (daysLeft * msInDay)) / msInHr)
    let minsLeft = Math.floor((msDiff - (daysLeft * msInDay) - (hrsLeft * msInHr)) / msInMin)
    let secsLeft = Math.floor((msDiff - (daysLeft * msInDay) - (hrsLeft * msInHr) - (minsLeft * msInMin)) / msInSec)

    countDownElem.innerText = daysLeft + ":" + hrsLeft + ":" + minsLeft + ":" + secsLeft
}

setInterval(updateCountdown)