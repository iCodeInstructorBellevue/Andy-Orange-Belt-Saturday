
function updateTime(){
  let timeElement = document.getElementById("time")

  let date = new Date()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  let amPM = "am"

  if (hours > 12) {
    amPM = "pm"
    hours -= 12
  }

  timeElement.innerText = hours + ":" + minutes + ":" + seconds
}

setInterval(updateTime);
